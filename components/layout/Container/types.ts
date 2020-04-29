export interface containerProps {
	height: number;
	bottom: number;
	top: number;
	windowHeight: number;
	element: any;
}
export interface elementProps {
	top: number;
	height: number;
	bottom: number;
}
export interface currentProps {
	top: number;
	bottom: number;
	wasInview: boolean;
	isInview: boolean;
	isOnTop: boolean;
	isOnBottom: boolean;
	isOffTop: boolean;
	isInFullView: boolean;
}
