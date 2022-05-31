import { StaticImageData } from 'next/image';
import React from 'react';
import Avatar from './avatar';

interface Options {
  member: {
    name: string;
    position: string;
    avatar: string | StaticImageData;
    href: string;
  }
}

export default function CompanyMember({member}: Options) {
  return <>
    <a href={member.href} target="_blank" rel="noreferrer">
      <div className="about-people text-center">
        <div className="item">
          <Avatar src={member.avatar} />
          <h4 className="h4 text-white">{member.name}</h4>
          <p className="smallCaptionGrotesk color-gray">{member.position}</p>
        </div>
      </div>
    </a>
  </>
}
