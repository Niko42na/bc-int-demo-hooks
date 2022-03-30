import React from "react";
import { useTranslation } from "react-i18next";
import "./translations/i18n";
 
export const WelcomeComponent = (props) => {
    const { t } = useTranslation();
    const lang = props.lang;
    return (
        <div style={{ textAlign: lang === "arab" ? "right" : "left" }}>
                <p>
                    {t("welcome")}
                </p>
                <p>
                    {t("dateFormatOne", { date: new Date() })} {"=>"} {t("keyWithCount", { count: 6 })}
                </p>
                <p>
                    {t("dateFormatOne", { date: new Date() })} {"=>"} {t("keyWithCount", { count: 3 })}
                </p>
                <p>
                    {t("dateFormatTwo", { date: new Date() })} {"=>"} {t("keyWithCount", { count: 1 })}
                </p>
        </div>
    );
};