
export default function DieComponent(props){
    const styles = props.isHeld? 
                    "bg-green-500 text-center h-14 px-6 rounded-xl py-2 shadow-lg" 
                    : "bg-slate-500 text-center h-14 px-6 rounded-xl py-2 shadow-lg";
    return(
        <>
            {/* <h1 className={styles} onClick={props.onClick}>{props.value}</h1> */}
            <img src={`/public/${props.value}.png`} alt={`The dice roll of number${props.value}`} className={styles}  onClick={props.onClick} />
        </>
    )
}