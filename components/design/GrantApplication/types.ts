import { ReactNode } from "react";

export interface GrantApplicationProps {
  title: string,
  children: ReactNode
  imgSrc: string,
  imgAlt: string,
}

export interface WrapperProps {
  imgSrc: string
}