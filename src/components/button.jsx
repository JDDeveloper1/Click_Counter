
// import CSS
import '../stylesheet/buttons.css';

function ButtonClick({textButton, buttonCLicked, handleClick,}) {
	return (

		<button 
			className={ buttonCLicked ? 'button-click' : 'button-reset' }
			onClick={handleClick}>
			{textButton}
		</button>
	);
}

export default ButtonClick;