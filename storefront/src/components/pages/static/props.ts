import { makeStaticProps } from '@/src/lib/getStatic';
import { ContextModel } from '@/src/lib/getStatic';

export const getStaticProps = async (ctx: ContextModel) => {
    const r = await makeStaticProps(['common'])(ctx);
    
    return {
        props: {
            ...r.props,
            ...r.context,
        },
        revalidate: 60,
    };
}; 