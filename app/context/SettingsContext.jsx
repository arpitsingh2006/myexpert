"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getSettings } from "@/api/settings";


const SettingsContext = createContext();


export function SettingsProvider({children}){

    const [settings,setSettings] = useState(null);


    useEffect(()=>{

        loadSettings();

    },[]);



    const loadSettings = async()=>{

        try{

            const res = await getSettings();

            if(res?.status === "success" || res?.status){

                setSettings(res.data);

            }


        }catch(error){

            console.log("Settings Error",error);

        }

    };


    return (

        <SettingsContext.Provider value={{settings}}>

            {children}

        </SettingsContext.Provider>

    );

}



export function useSettings(){

    return useContext(SettingsContext);

}