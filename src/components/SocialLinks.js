import React from "react";

function SocialLinks({ text, url }) {
	async function handleClick() {
		const shareData = {
			text: text,
			url: url
		};
		try {
			await navigator.share(shareData);
		} catch (e) {
			console.error(e);
		}
	}

	return (
		<>
			<div className="social-links">
				<div className="social-link social-link-whatsapp">
					<a href={url}>
						<i className="bi bi-whatsapp"></i>
					</a>
				</div>
				<div className="social-link social-link-share" onClick={handleClick}>
					<span>
						<i className="bi bi-share-fill"></i>
					</span>
				</div>
			</div>
		</>
	);
}

export default SocialLinks;
