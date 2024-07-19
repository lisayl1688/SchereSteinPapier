import { useEffect, useState } from "react";
import Dark from "../components/dark/Dark";
import papier from "../assets/img/papier.png"
import stein from "../assets/img/stein.png"
import schere from "../assets/img/schere.png"
import Hintergrund from "../assets/img/Hintergrund.png"




const Home = () => {

        const [dark, setDark] = useState<boolean>(false)

        const [weapon, setWeapon] = useState<string>("");
        const [cpuWeapon, setCpuWeapon] = useState<string>("");
        const [fightResult, setFightResult] = useState<string>("");

        const [countWin, setCountWin] = useState<number>(0);
        const [countLose, setCountLose] = useState<number>(0);
        const [countDraw, setCountDraw] = useState<number>(0);

    
        useEffect(() => {
            if (weapon) {
                calculateFight();
            }
        }, [weapon, cpuWeapon]);
    
        const handleCpuWeapon = () => {
            let randomWeaponArray: string[] = ["schere", "stein", "papier"];
            const randomWeaponIndex = Math.floor(Math.random() * randomWeaponArray.length);
            setCpuWeapon(randomWeaponArray[randomWeaponIndex]);
        };
    
        const setMyWeapon = (weapon: string) => {
            handleCpuWeapon();
            setWeapon(weapon);
        };
    
        function calculateFight() {
            if (weapon === cpuWeapon) {
                console.log("unentschieden");
                setFightResult("knapper kampf! UNENTSCHIEDEN");
                setCountDraw(countDraw+1)
            } else if (
                (weapon === "schere" && cpuWeapon === "papier") ||
                (weapon === "stein" && cpuWeapon === "schere") ||
                (weapon === "papier" && cpuWeapon === "stein")
            ) {
                setFightResult("Stolz gekämpft! Du hast gewonnen!");
                setCountWin(countWin+1)
            } else {
                setFightResult("Du hast verloren...gib nicht auf!");
                setCountLose(countLose+1)
            }
        }

        const resetGame = () => {
            window.location.reload();
        };
    
        return (
            <>
                <div className={`${dark && "darkLightMode"}`}>
            <img  className="hintergrund" src={Hintergrund} alt="" />
            <div className="mainPart">
                    <div className="headWrapper">
                        <div className="top">
                            <h1>Rock, Paper, Scissors - are you lucky?</h1>
                            <h2>Choose your weapon wisely!</h2>
                        </div>
                        <div className="darkSVG">
                            <Dark dark={dark} setDark={setDark}/>
                        </div>
                    </div>
                    <div className="resultScoreWrapper">
                        <div className="resultOutput">
                            <p>You chose: <span>{weapon}</span></p>
                            <p>Enemy chose: <span>{cpuWeapon}</span></p>
                            <p>Result: <span>{fightResult}</span></p>
                        </div>
                        <div className="HightScore">
                            <p>Aktuelle Siege:{countWin}</p>
                            <p>Aktuelle Niederlagen: {countLose}</p>
                            <p>Aktuelle Unentschieden:{countDraw}</p>
                        </div>
                    </div>
                    <div>
                        <button className="resetButton" onClick={resetGame}>Reset</button>
                    </div>
                    <section className="waffen">
                        <div className="weapon-container" onClick={() => setMyWeapon("schere")} style={{ cursor: 'pointer', position: 'relative' }}>
                            <img className="schere" src={schere} alt="schere" />
                            <img className="schereSchatten" src={schere} alt="schere" />
                        </div>
                        <div className="weapon-container" onClick={() => setMyWeapon("stein")} style={{ cursor: 'pointer', position: 'relative' }}>
                            <img className="stein" src={stein} alt="schere" />
                            <img className="steinSchatten" src={stein} alt="schere" />

                        </div>
                        <div className="weapon-container" onClick={() => setMyWeapon("papier")} style={{ cursor: 'pointer', position: 'relative' }}>
                            <img className="papier" src={papier} alt="schere" />
                            <img className="papierSchatten" src={papier} alt="schere" />

                        </div>
                    </section>

                </div>
            </div>
            </>
        );
}
 
export default Home;