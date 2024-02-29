import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { name, instructions, gifUrl, bodyPart, target, equipment } =
    exerciseDetail;

  console.log(exerciseDetail);

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
    >
      <img
        src={gifUrl}
        alt={`${name}-illustration`}
        loading="lazy"
        className="detail-image"
      />
      <Stack sx={{ gap: { lg: '28px', xs: '14px' } }}>
        <Typography variant="h3">{name}</Typography>
        {instructions
          ? instructions.map((instruction, index) => (
              <Typography key={index} variant="h6">
                {index + 1}. {instruction}
              </Typography>
            ))
          : 'Loading...'}
        {extraDetail.map(item => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: '#fff2db',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
              }}
            >
              <img
                src={item.icon}
                alt={`${item.name}-icon`}
                style={{ width: '50px', height: '50px' }}
              />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
