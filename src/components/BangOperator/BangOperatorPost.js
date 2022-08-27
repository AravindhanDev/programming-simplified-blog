import React from "react";
import PostHeader from "../PostHeader";
import "../../css/post.css";

function Post() {
	const leftBrace = "{";
	const rightBrace = "}";
	const falseComment = "// false";
	const trueComment = "// true";

	return (
		<>
			<div className="post">
				<PostHeader
					heading='Stop Using The "!" Bang Operator In JavaScript'
					createdAt="August 27, 2022"
					tagLine="JavaScript"
					url="https://blog-programming-simplified-web.app/stop_using_bang_operator"
				/>
				<br />
				<p>
					One of the more common questions I get on my YouTube videos is why I
					write
					<span className="highlight-text">user == null</span>
					instead of <span className="highlight-text">!user</span>. Most people
					will look at these two pieces of code and assume they do the same
					thing, so they go with the shorter option, but there are actually
					massive differences between these two. These differences are why I
					always write out the full{" "}
					<span className="highlight-text">user == null</span> code to prevent
					myself from running into common issues related to
					<span className="highlight-text">!user</span>.
				</p>
				<br />
				<br />
				<h3>How Does The "!" Bang Operator Work</h3>
				<span className="text-muted">
					In its simplest form the bang operator just negates whatever you pass
					after it.
				</span>
				<div className="code-area mt-3 mb-3">
					<code>
						<div>
							!<span className="violet-text">true</span>&nbsp;
							<span className="comment-text">{falseComment}</span>
						</div>
						<div>
							!<span className="violet-text">false</span>&nbsp;
							<span className="comment-text">{trueComment}</span>
						</div>
					</code>
				</div>
				<p>
					The operator gets a bit more complex when you deal with values that
					are not already booleans, though. In order to properly work the bang
					operator must first convert whatever value it is used on to a boolean
					which sometimes has unintended consequences.
				</p>
				<p>
					Let's assume we are checking to see if our user object exists. We know
					that the user can either be null, undefined, or a full user object. In
					this scenario !user and user == null will work exactly the same.
				</p>
				<div className="code-area mt-3 mb-3">
					<code>
						<div>
							!<span className="blue-text">null</span>
							<span className="comment-text"> {trueComment}</span>
						</div>
						<div>
							!<span className="blue-text">undefined</span>
							<span className="comment-text"> {trueComment}</span>
						</div>
						<div>
							!{leftBrace} <span className="red-text">name</span>:
							<span className="green-text"> "Kyle"</span> {rightBrace}
							<span className="comment-text"> {falseComment}</span>
						</div>
						<br />
						<div>
							<span className="blue-text">null</span> ==
							<span className="blue-text"> null</span>
							<span className="comment-text"> {trueComment} </span>
						</div>
						<div>
							<span className="blue-text">undefined</span> ==
							<span className="blue-text"> null</span>
							<span className="comment-text"> {trueComment} </span>
						</div>
						<div>
							{leftBrace} <span className="red-text">name</span>:
							<span className="green-text"> "Kyle" </span>
							{rightBrace} ==
							<span className="blue-text"> null</span>
							<span className="comment-text"> {falseComment}</span>
						</div>
					</code>
				</div>
				<br />
				<br />
				<h3>Why The Bang Operator Can Be Bad</h3>
				<p>
					What happens if we are checking user input for a number, though. We
					know the values can either be
					<span className="highlight-text">null</span>,
					<span className="highlight-text">undefined</span>, or a number. In
					this scenario <span className="highlight-text">!number</span> and
					<span className="highlight-text">number == null</span> will act
					exactly the same, <strong>except</strong> for the number 0.
				</p>
				<div className="code-area mt-3 mb-3">
					<code>
						<div>
							!<span className="violet-text">0 </span>
							<span className="comment-text">{trueComment}</span>
						</div>
						<div>
							!<span className="violet-text">1 </span>
							<span className="comment-text">{falseComment}</span>
						</div>
						<br />
						<div>
							<span className="violet-text">0</span> ==
							<span className="blue-text"> null </span>
							<span className="comment-text">{falseComment}</span>
						</div>
						<div>
							<span className="violet-text">1</span> ==
							<span className="blue-text"> null </span>
							<span className="comment-text">{falseComment}</span>
						</div>
					</code>
				</div>
				<p>
					The reason for this discrepancy is because the bang operator needs to
					convert the number to a boolean in order to negate the boolean and the
					number 0 is considered false when converting to a boolean. This can
					easily lead to bugs in your program that are difficult to catch.
				</p>
				<div className="code-area mt-3 mb-3">
					<code>
						<div>
							<span className="blue-text">const </span>
							numberOfChildren =
							<span className="yellow-text"> getUserInput</span>()
						</div>
						<div>
							<span className="blue-text">if </span>
							(!numberOfChildren) {leftBrace}
						</div>
						<div>
							&nbsp;&nbsp;
							<span className="yellow-text">alert</span>(
							<span className="green-text">
								"You need to enter a value for number of children"
							</span>
							)
						</div>
						<div>
							{rightBrace} <span className="blue-text">else</span> {leftBrace}
						</div>
						<div>
							&nbsp;&nbsp;<span className="yellow-text">submitForm</span>()
						</div>
						<div>{rightBrace}</div>
					</code>
				</div>
				<p>
					In this example it is impossible for the user submit the form with a
					value of 0 children even though the intent with this check is to just
					ensure the user entered a value for children and not to exclude users
					with 0 children.
				</p>
				<p>
					This is not only an issue with the number 0, though.
					<span className="highlight-text">NaN</span> and empty strings,
					<span className="highlight-text">""</span>, also evaluate to false
					when converted to a boolean which means you could get unintended
					results when using the bang operator if all you wanted to check was if
					the value was null or undefined.
				</p>
				<p>
					This type of conversion between types is called implicit type coercion
					and is something I almost always try to avoid in JavaScript since it
					leads to many potential bugs. This is also why I almost always use
					triple equals, <span className="highlight-text">===</span>, instead of
					double equals,
					<span className="highlight-text">==</span>, since triple equals never
					does type coercion.
				</p>
				<br />
				<br />
				<h3>Conclusion</h3>
				<p>
					While the bang operator may seem like a great tool for writing less
					code, I personally find that it leads to more bugs than it is worth
					which is why I almost never use the bang operator in my code.
				</p>
				<br />
				<br />
			</div>
		</>
	);
}

export default Post;
