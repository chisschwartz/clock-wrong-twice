export default function Clock() {

    const time = new Date();
    const displayTime = time.getHours() + ":" + time.getMinutes();
    //creates our time that we can now mess with


    return(
        <div>
            <p>{displayTime}</p>
        </div>
    )
}

//clock should tell time accurately enough but get it wrong at least twice a day
//could add a flicker effect to sell the old digital clock feel