import React from 'react';
import st from "./Login.module.css";
import {useForm} from "react-hook-form";

const Login = () => {

    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        defaultValues: {
            login: "",
            password: "",
            spassword: ""
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
                <span className={st.title}>Войти</span>
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
                    <button type={"submit"} className={st.button}>Войти</button>
                </form>
            </div>
        </div>
    );
};

export default Login;