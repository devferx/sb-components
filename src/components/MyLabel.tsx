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
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No label",
  size = "normal",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
