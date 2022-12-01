import React from 'react';
import st from "./Register.module.css";
import {useForm} from "react-hook-form";

const Register = () => {

    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        defaultValues: {
            login: "",
            password: "",
            repeatPassword: ""

        },
        mode: "onBlur"
    })

    const onSubmit = (data) => {
        console.log(data)
        reset();
    }

    return (
        <div className={st.container}>
            <div className={st.formBlock}>
                <span className={st.title}>Регистрация</span>
                <form onSubmit={handleSubmit(onSubmit)} className={st.form}>
                    <input
                        className={st.input}
                        placeholder={"Логин"}
                        type={"text"}
                        {...register("login", {
                            required: "Укажите логин",
                            minLength: {
                                value: 2,
                                message: "Минимум 2 символа"
                            }
                        })}
                    />
                    <div className={st.inputErrorMessage}>
                        {errors?.login && <p>{errors?.login?.message}</p>}
                    </div>
                    <input
                        className={st.input}
                        placeholder={"Пароль"}
                        type={"password"}
                        {...register("password", {
                            required: "Укажите пароль",
                            minLength: {
                                value: 2,
                                message: "Минимум 2 символа"
                            }
                        })}
                    />
                    <div className={st.inputErrorMessage}>
                        {errors?.password && <p>{errors?.password?.message}</p>}
                    </div>
                    <input
                        className={st.input}
                        placeholder={"Повторите пароль"}
                        type={"password"}
                        {...register("spassword", {
                            required: "Повторите пароль",
                            minLength: {
                                value: 2,
                                message: "Минимум 2 символа"
                            }
                        })}
                    />
                    <div className={st.inputErrorMessage}>
                        {errors?.spassword && <p>{errors?.spassword?.message}</p>}
                    </div>
                    <button type={"submit"} className={st.button}>Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
};

export default Register;