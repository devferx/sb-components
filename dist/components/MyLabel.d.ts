/// <reference types="react" />
import "./MyLabel.css";
export interface MyLabelProps {
    /**
     * Cual sera el texto a mostrar
     */
    label?: string;
    /**
     * Que tamaño tendra la tipografia
     */
    size?: "normal" | "h1" | "h2" | "h3";
    /**
     * Color de la tipografia
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Letras capitalizadas
     */
    allCaps?: boolean;
    /**
     * Color de la tipografia personalizado
     */
    fontColor?: string;
    /**
     * Color de fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, backgroundColor, color, label, size, fontColor, }: MyLabelProps) => JSX.Element;
