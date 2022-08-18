import React from 'react';
import HoverInfoCard from '../../../../../@jumbo/components/Common/HoverInfoCard';

const CardWidget = ({ backgroundColor, icon, title, subTitle, Link }) => {
  return (
    <HoverInfoCard backgroundColor={backgroundColor} icon={icon} title={title} subTitle={subTitle} linkOnArrow={Link} />
  );
};

export default CardWidget;
