import React, { useState, useEffect } from "react";

const Authenticated = () => {

    const user = localStorage.getItem("user")

    const [member, setMember] = useState("")
    const [duration, setDuration] = useState("")
    const [civil, setCivil] = useState("")


    const [showSecond, setShowSecond] = useState(false)
    const [showThird, setShowThird] = useState(false)
    const [showEligible, setShowEligible] = useState(false)


    const setMemberChange = (e) => {
        setMember(e.target.value)
    }

    const setDurationChange = (e) => {
        setDuration(e.target.value)
    }

    const setCivilChange = (e) => {
        setCivil(e.target.value)
    }

    useEffect(() => {
        if (member === "Yes") {
            setShowSecond(true)
        }
        if (member === "No" || member === "") {
            // alert("you do not qualify for a loan")
            setShowSecond(false)
        }
    }, [member])

    useEffect(() => {
        if (duration === "Yes") {
            setShowThird(true)
        }
        if (duration === "No" || duration === "") {
            // alert("you do not qualify for a loan")
            setShowThird(false)
        }
    }, [duration])

    useEffect(() => {
        if (civil === "Yes") {
            setShowEligible(true)
        }

        if (civil === "No" || civil === "") {
            // alert("you do not qualify for a loan")
            setShowEligible(false)
        }

    }, [civil])



    return (
        <>


            <section className="login">
                <div className="loginContainer">
                    <h2 style={{ marginBottom: "15px", fontSize: "15px", textAlign: "center" }}>Hello, {user}</h2>

                    <span style={{ textAlign: "center", marginBottom: "10px" }}>Please fill the form below correctly. <br />This will help us determine if you're eligible for a loan </span>


                    <label><h4>Are you a registered member of Albarka</h4></label>
                    <select value={member} onChange={setMemberChange}>
                        <option value="" ></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>

                    </select>

                    {showSecond ?
                        <>
                            <label><h4>How long have you been a member</h4></label>
                            <select value={duration} onChange={setDurationChange}>
                                <option value="" ></option>
                                <option value="Yes">More than 3 Months</option>
                                <option value="No">Less than 3 Months</option>

                            </select></> : <></>
                    }

                    {showThird ?
                        <>
                            <label><h4>Are you a civil servant</h4></label>
                            <select value={civil} onChange={setCivilChange}>
                                <option value="" ></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>

                            </select></> : <></>
                    }
                    <br />
                    {
                        showEligible ? <span style={{ textAlign: "center", color: "green" }}> Congratulations, You're eligible for a loan</span> : <></>
                    }


                </div>

            </section>

        </>





    )
}

export default Authenticated