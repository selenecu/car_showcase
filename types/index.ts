export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: () => void;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
    // MouseEventHandler<HTMLButtonElement>
}