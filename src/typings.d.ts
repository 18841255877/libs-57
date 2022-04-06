import {HTMLAttributes, ReactChild} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: ReactChild;
}