import React, { useEffect, useState } from 'react';
import { useSlider } from './hooks';
import { Link, Stack, TP } from '../../atoms';
import styled from '@emotion/styled';
import { X } from 'lucide-react';

type AnnouncementBarType = {
    text: string;
    href: string;
};

// type Omitted = Omit<Omit<AnnouncementBarType, 'text'>, 'href'>;

// Styled components declarations moved up to fix reference errors
const Entry = styled(Stack)`
    padding: 1rem 0;
    background: #f16717;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
`;

// Styled component to enforce white text for the announcement
const AnnouncementText = styled(TP)`
    &&&& {
        color: #fff !important;
    }
    * {
        color: #fff !important;
    }
`;

// Styled component for Link to enforce white color
const AnnouncementLink = styled(Link)`
    color: #fff !important;
    text-decoration: none;
`;

// New styled component for the dismiss button
const DismissButton = styled.button`
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    z-index: 10;
`;

AnnouncementText.defaultProps = { color: 'contrast' };

export const AnnouncementBar: React.FC<{ entries: AnnouncementBarType[]; secondsBetween: number }> = ({
    entries,
    secondsBetween,
}) => {
    const [jsEnabled, setJsEnabled] = useState(false);
    const [visible, setVisible] = useState(true);
    const { ref } = useSlider({ secondsBetween });

    useEffect(() => {
        setJsEnabled(true);
    }, []);

    if (!visible) return null;

    return (
        <Stack w100 style={{ position: 'relative' }}>
            <DismissButton onClick={() => setVisible(false)} aria-label="Dismiss announcement">
                <X size={16} />
            </DismissButton>
            {jsEnabled ? (
                <Stack w100 className="keen-slider" ref={ref}>
                    {entries.map((bar, idx) => {
                        const { text, href, ...styles } = bar;
                        return (
                            <AnnouncementLink key={idx} href={href}>
                                <Entry {...styles} justifyCenter itemsCenter className="keen-slider__slide">
                                    <AnnouncementText size="1.25rem" weight={500}>
                                        {text}
                                    </AnnouncementText>
                                </Entry>
                            </AnnouncementLink>
                        );
                    })}
                </Stack>
            ) : (
                <Stack w100>
                    <AnnouncementLink href={entries[0].href} style={{ width: '100%' }}>
                        <Entry {...entries[0]} justifyCenter itemsCenter w100>
                            <AnnouncementText size="1.25rem" weight={600}>
                                {entries[0].text}
                            </AnnouncementText>
                        </Entry>
                    </AnnouncementLink>
                </Stack>
            )}
        </Stack>
    );
};
