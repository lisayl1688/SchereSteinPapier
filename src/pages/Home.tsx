import { useEffect, useState } from "react";
import Dark from "../components/dark/Dark";

const Home = () => {

        const [dark, setDark] = useState<boolean>(false)

        const [weapon, setWeapon] = useState<string>("");
        const [cpuWeapon, setCpuWeapon] = useState<string>("");
        const [fightResult, setFightResult] = useState<string>("");
    
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
            } else if (
                (weapon === "schere" && cpuWeapon === "papier") ||
                (weapon === "stein" && cpuWeapon === "schere") ||
                (weapon === "papier" && cpuWeapon === "stein")
            ) {
                setFightResult("Stolz gekämpft! Du hast gewonnen!");
            } else {
                setFightResult("Du hast verloren...gib nicht auf!");
            }
        }

        const resetGame = () => {
            window.location.reload();
        };
    
        return (
            <>
            <img  className="hintergrund" src="./src/assets/img/Hintergrund.png" alt="" />
            <div className="mainPart">
                <div className={`${dark && "darkLightMode"}`}>
                    <div className="headWrapper">
                        <div className="top">
                            <h1>Rock, Paper, Scissors - are you lucky?</h1>
                            <h2>Choose your weapon wisely!</h2>
                        </div>
                        <div className="darkSVG">
                            <Dark dark={dark} setDark={setDark}/>
                        </div>
                    </div>
                    <div className="resultOutput">
                        <p>You chose: <span>{weapon}</span></p>
                        <p>Enemy chose: <span>{cpuWeapon}</span></p>
                        <p>Result: <span>{fightResult}</span></p>
                    </div>
                    <div>
                        <button className="resetButton" onClick={resetGame}>Reset</button>
                    </div>
                    <section className="waffen">
                        <div className="weapon-container" onClick={() => setMyWeapon("schere")} style={{ cursor: 'pointer', position: 'relative' }}>
                            <img className="schere" src="./src/assets/img/schere.png" alt="schere" />
                            <img className="schereSchatten" src="./src/assets/img/schere.png" alt="schere" />
                        </div>
                        <div className="weapon-container" onClick={() => setMyWeapon("stein")} style={{ cursor: 'pointer', position: 'relative' }}>
                            <img className="stein" src="./src/assets/img/stein.png" alt="schere" />
                            <img className="steinSchatten" src="./src/assets/img/stein.png" alt="schere" />

                        </div>
                        <div className="weapon-container" onClick={() => setMyWeapon("papier")} style={{ cursor: 'pointer', position: 'relative' }}>
                            <img className="papier" src="./src/assets/img/papier.png" alt="schere" />
                            <img className="papierSchatten" src="./src/assets/img/papier.png" alt="schere" />

                        </div>
                    </section>

                </div>
            </div>
            </>
        );
}
 
export default Home;