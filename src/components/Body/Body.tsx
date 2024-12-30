import { useTranslation } from "react-i18next";
import "./Body.css";

const Body = () => {
	const { t } = useTranslation();

	return (
		<main className="body">
			<div>
				<h1>{t("title")}</h1>
				<p>{t("subtitle_1")}</p>
				<p>{t("body_text_1")}</p>
				<p>{t("body_text_2")}</p>
				<div className="group_display_row">
					<p>{t("subtitle_3a")}</p>
					<p className="bold">{t("subtitle_3b")}</p>
				</div>
				<p>{t("body_text_3")}</p>
				<p>{t("body_text_4")}</p>
				<p>{t("subtitle_4")}</p>
				<p>{t("body_text_5")}</p>
				<div className="group_mail">
					<p>{t("footer_text_1")}</p>
					<p className="bold">
						<a href="mailto: hello@guzzu.io">{t("contact_us")}</a>
					</p>
				</div>
			</div>
			<div className="group_display_center">
				<div className="group_goodbye">
					<p>{t("footer_text_2")}</p>
					<h2>{t("bye_text")}</h2>
				</div>
			</div>
		</main>
	);
};

export default Body;
