import React from "react";
import PostHeader from "../PostHeader";
import "../../css/post.css";

function NullVsUndefined() {
	const comment = "//";

	return (
		<div class="post">
			<PostHeader
				heading="Null Vs Undefined"
				createdAt="August 29, 2022"
				tagLine="JavaScript"
				url="https://blog-programming-simplified/null_vs_undefined"
			/>
			<br />
			<p>
				JavaScript is quite confusing when it comes to a variable not having a
				value because it can be <span className="highlight-text">null</span> or
				<span className="highlight-text">undefined</span>. This leads to a lot
				of confusion, so in this article I will break down the differences
				between <span className="highlight-text">null</span> and{" "}
				<span className="highlight-text">undefined</span>.
			</p>
			<br />
			<h3>Null vs Undefined</h3>
			<p>
				To start I want to explain what null and undefined have in common since
				they are very similar. Both <span className="highlight-text">null</span>
				and <span className="highlight-text">undefined</span> mean that there is
				no value. If a variable is set to
				<span className="highlight-text">null</span>
				or <span className="highlight-text">undefined</span> it has no value and
				if a function returns <span className="highlight-text">null</span> or
				<span className="highlight-text">undefined</span> then it is saying it
				has no value to return. This you most likely already understand.
			</p>
			<p>
				These values are actually so similar that they are considered equal when
				comparing with double equals (<span className="highlight-text">==</span>
				).
			</p>
			<div className="code-area mt-3 mb-3">
				<code>
					<div>
						<span className="yellow-text">console</span>.
						<span className="yellow-text">log</span>(
						<span className="blue-text">null </span>
						==
						<span className="blue-text"> undefined</span>)
					</div>
					<div>
						<span className="comment-text">{comment} true</span>
					</div>
					<div>
						<span className="yellow-text">console</span>.
						<span className="yellow-text">log</span>(
						<span className="blue-text">null </span>
						===
						<span className="blue-text"> undefined</span>)
					</div>
					<div>
						<span className="comment-text">{comment} false</span>
					</div>
				</code>
			</div>
			<p>
				Because of this, when I want to check to see if a variable has a value
				or not I almost always use double equals comparison since it will return
				true whether the variable is
				<span className="highlight-text">null</span> or
				<span className="highlight-text">undefined</span>.
			</p>
			<br />
			<h3>Null</h3>
			<p>
				It is easiest to start with <span className="highlight-text">null</span>
				when comparing the differences between
				<span className="highlight-text">null</span> and
				<span className="highlight-text">undefined</span> since
				<span className="highlight-text">null</span> is very straightforward. If
				a variable is
				<span className="highlight-text">null</span> then it means the variable
				has no value and that it was explicitly set to have no value by the
				programmer. A variable will never be
				<span className="highlight-text">null</span> unless somewhere in the
				code a programmer set a variable to
				<span className="highlight-text">null</span>.
			</p>
			<p>
				This is important to know since when you see a
				<span className="highlight-text">null</span> value you know that the
				programmer who wrote that code is telling you there is no value
				explicitly. A great example of where
				<span className="highlight-text">null</span> is useful is in something
				like a find function that queries a database for an entry. If no entry
				exists it makes the most sense to return
				<span className="highlight-text">null</span> since you are stating that
				there is no value found.
			</p>
			<br />
			<h3>Undefined</h3>
			<p>
				On the other hand <span className="highlight-text">undefined</span>
				means that there is no value because no value has been set yet. For
				example, if you create a variable and do not assign it a value then it
				will be <span className="highlight-text">undefined</span>.
			</p>
			<div className="code-area mt-3 mb-3">
				<code>
					<div>
						<span className="blue-text">let </span>a
					</div>
					<br />
					<div>
						<span className="yellow-text">console</span>.
						<span className="yellow-text">log</span>
						(a)
					</div>
					<div>
						<span className="comment-text">{comment} undefined</span>
					</div>
				</code>
			</div>
			<p>
				Where this gets a bit confusing is the fact that you can set a variable
				to <span className="comment-text">undefined</span>.
			</p>
			<div className="code-area mt-3 mb-3">
				<code>
					<div>
						<span className="blue-text">let </span> a =
						<span className="blue-text">null</span>
					</div>
					<br />
					<div>
						<span className="yellow-text">console</span>.
						<span className="yellow-text">log</span>(a)
					</div>
					<div>
						<span className="comment-text">{comment} null</span>
					</div>
					<br />
					<div>
						a = <span className="blue-text">undefined</span>
					</div>
					<div>
						<span className="yellow-text">console</span>.
						<span className="yellow-text">log</span>(a)
					</div>
					<div>
						<span className="comment-text">{comment} undefined</span>
					</div>
				</code>
			</div>
			<p>
				The reason you would want to do this is to essentially reset a variable.
				By setting a variable to
				<span className="highlight-text">undefined</span> you are conveying the
				message that the variable no longer contains any useful information,
				while if the value is <span className="highlight-text">null</span> then
				you are specifically saying the result of some action has no value.
			</p>
			<p>
				Technically, these both indicate no value, but they convey that message
				in slightly different ways.
			</p>
			<br />
			<h3>Conclusion</h3>
			<p>
				Overall it is not super important to know the differences between
				<span className="highlight-text">null</span>
				and <span className="highlight-text">undefined</span> other than how
				they interact with double and triple equals, but if you are diligent in
				your use of
				<span className="highlight-text">null</span> and
				<span className="highlight-text">undefined</span> you can write cleaner
				code that can make use out of the implicit/explicit nature of
				<span className="highlight-text">null</span> and
				<span className="highlight-text">undefined</span>.
			</p>
			<br />
			<br />
		</div>
	);
}

export default NullVsUndefined;
