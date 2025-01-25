import {
    dummyPaymentHandler,
    DefaultJobQueuePlugin,
    DefaultSearchPlugin,
    VendureConfig,
} from '@vendure/core';
import { defaultEmailHandlers, EmailPlugin } from '@vendure/email-plugin';
import { AssetServerPlugin, configureS3AssetStorage } from '@vendure/asset-server-plugin';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import 'dotenv/config';
import path from 'path';

const IS_DEV = process.env.APP_ENV === 'dev';
const serverPort = +(process.env.PORT || 3000);

export const config: VendureConfig = {
    apiOptions: {
        port: serverPort,
        adminApiPath: 'admin-api',
        shopApiPath: 'shop-api',
        cors: {
            origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'],
            credentials: true,
        },
        // The following options are useful in development mode,
        // but are best turned off for production for security
        // reasons.
        ...(IS_DEV ? {
            adminApiPlayground: {
                settings: { 'request.credentials': 'include' } as any,
            },
            adminApiDebug: true,
            shopApiPlayground: {
                settings: { 'request.credentials': 'include' } as any,
            },
            shopApiDebug: true,
        } : {}),
    },
    authOptions: {
        tokenMethod: ['bearer', 'cookie'],
        superadminCredentials: {
            identifier: process.env.SUPERADMIN_USERNAME,
            password: process.env.SUPERADMIN_PASSWORD,
        },
        cookieOptions: {
            secret: process.env.COOKIE_SECRET,
            // Added security options for cookies
            secure: !IS_DEV,
            sameSite: 'lax',
            httpOnly: true,
        },
    },
    dbConnectionOptions: {
        type: 'postgres',
        synchronize: false,
        migrations: [path.join(__dirname, './migrations/*.+(ts|js)')],
        logging: IS_DEV,
        database: process.env.DB_NAME,
        schema: process.env.DB_SCHEMA,
        host: process.env.DB_HOST,
        url: process.env.DB_URL,
        port: +process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        ssl: process.env.DB_CA_CERT ? {
            ca: process.env.DB_CA_CERT,
        } : process.env.DB_SSL === 'true' ? {
            rejectUnauthorized: false
        } : undefined,
        // Added connection pool settings
        pool: {
            min: 2,
            max: 10
        }
    },
    paymentOptions: {
        paymentMethodHandlers: [dummyPaymentHandler],
    },
    customFields: {
        Product: [
            {
                name: 'test',
                type: 'string',
            }
        ]
    },
    plugins: [
        AssetServerPlugin.init({
            route: 'assets',
            assetUploadDir: process.env.ASSET_UPLOAD_DIR || path.join(__dirname, '../static/assets'),
            // Support for both local and S3/MinIO storage
            storageStrategyFactory: process.env.MINIO_ENDPOINT ? configureS3AssetStorage({
                bucket: process.env.MINIO_BUCKET || 'vendure-assets',
                credentials: {
                    accessKeyId: process.env.MINIO_ACCESS_KEY,
                    secretAccessKey: process.env.MINIO_SECRET_KEY,
                },
                nativeS3Configuration: {
                    endpoint: process.env.MINIO_ENDPOINT,
                    forcePathStyle: true,
                    signatureVersion: 'v4',
                    region: process.env.MINIO_REGION || 'eu-west-1',
                },
            }) : undefined,
            previewMaxHeight: 1600,
            previewMaxWidth: 1600,
            uploadMaxFileSize: 20971520, // 20MB
        }),
        DefaultJobQueuePlugin.init({ 
            useDatabaseForBuffer: true,
            pollInterval: 1000,
        }),
        DefaultSearchPlugin.init({ 
            bufferUpdates: false, 
            indexStockStatus: true,
            indexCustomFields: true,
        }),
        EmailPlugin.init({
            devMode: IS_DEV,
            outputPath: path.join(__dirname, '../static/email/test-emails'),
            route: 'mailbox',
            handlers: defaultEmailHandlers,
            templatePath: path.join(__dirname, '../static/email/templates'),
            transport: process.env.SMTP_HOST ? {
                type: 'smtp',
                host: process.env.SMTP_HOST,
                port: +(process.env.SMTP_PORT || 587),
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
                secure: process.env.SMTP_SECURE === 'true',
            } : undefined,
            globalTemplateVars: {
                fromAddress: process.env.EMAIL_FROM || '"example" <noreply@example.com>',
                verifyEmailAddressUrl: process.env.VERIFY_EMAIL_URL || 'http://localhost:8080/verify',
                passwordResetUrl: process.env.PASSWORD_RESET_URL || 'http://localhost:8080/password-reset',
                changeEmailAddressUrl: process.env.CHANGE_EMAIL_URL || 'http://localhost:8080/verify-email-address-change',
                shopUrl: process.env.SHOP_URL || 'http://localhost:8080',
            },
        }),
        AdminUiPlugin.init({
            route: 'admin',
            port: serverPort + 2,
            adminUiConfig: {
                apiPort: serverPort,
                defaultLanguage: process.env.DEFAULT_LANGUAGE || 'en',
                availableLanguages: ['en', 'es', 'de', 'fr'],
                brand: process.env.SHOP_NAME || 'Vendure',
            },
        }),
    ],
};
