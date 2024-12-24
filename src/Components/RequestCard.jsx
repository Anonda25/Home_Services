import { motion } from "motion/react"
import requstbanner from '../assets/request-qoute.png';


const RequestCard = () => {
    return (
        <div
            
        className="p-8  rounded-lg mx-auto">




            <div className="flex flex-col md:flex-row gap-24 items-center">

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={
                        { x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        duration: 1
                    }}
                    className="flex-1">
                    <div className="mb-6 ">
                        <h2 className="text-2xl font-bold">Request a Quote</h2>
                        <p className="text-gray-600">
                            If you would like to request any services, please contact us by filling out the form below.
                        </p>
                    </div>
                    <form className="space-y-4">

                        <div className="flex gap-4">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Your Name*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full bg-gray-100 border-none rounded-none"
                                    required
                                />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Email Address*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full bg-gray-100 border-none rounded-none"
                                    required
                                />
                            </div>
                        </div>


                        <div className="flex gap-4">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Phone Number*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="input input-bordered w-full bg-gray-100 border-none rounded-none"
                                    required
                                />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Choose Service*</span>
                                </label>
                                <select defaultValue={'DEFAULT'} className="select select-bordered w-full bg-gray-100 border-none rounded-none" required>
                                    <option value={'DEFAULT'} disabled>
                                        Select a service
                                    </option>
                                    <option value={'1'} >Plumbing Solutions</option>
                                    <option value={'2'} >Roofing Solutions</option>
                                    <option value={'3'} >Carpentry Solutions</option>
                                </select>
                            </div>
                        </div>


                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message*</span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered w-full bg-gray-100 border-none rounded-none"
                                    placeholder="Write your message here"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                        </div>


                        <button className=" w-full md:w-auto">
                            Submit
                        </button>
                    </form>
                </motion.div>


                <div className="flex-1">
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={
                            { x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1
                        }}
                     src={requstbanner} alt="Request Quote Banner" className="rounded-lg " />
                </div>
            </div>
        </div>
    );
};

export default RequestCard;
