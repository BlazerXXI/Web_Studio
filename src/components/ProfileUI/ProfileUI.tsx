import React from "react";

const ProfileUI = (props: any) => {
	const [styles] = props.styles;
	return (
		<div
			className={
				`ProfileUI bg-[#0b0e18] absolute top-[81px] left-0 w-full h-screen transition-all duration-300` +
				styles
			}
		>
			ProfileUI
		</div>
	);
};

export default ProfileUI;
