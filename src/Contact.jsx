import React,{useState} from "react";


const Contact = () => {
    const[data,setData] = useState({
        fullname: "",
        phone:"",
        email:"",
        message:""
    });

    const clickEvent = (event)=>{
     event.preventDefault();
     alert(`My Full Name is ${data.fullname}.My Mobile Number is ${data.phone}.My Message is ${data.message}.`)
    };

    const InputEvent =(event) =>{
        const{name,value} = event.target

        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            }
        })
    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={clickEvent}>
                            <div className="form-group">
                                <label >Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Full Name" />
                            </div>
                            <div className="form-group">
                                <label >Mobile Number</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile Number" />
                            </div>
                            <div className="form-group">
                                <label >Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            
                            <div className="form-group">
                                <label >Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={InputEvent} rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-secondary my-4">Submit Form</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;