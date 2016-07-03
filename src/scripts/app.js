const React = require('react'),
	ReactDOM = require('react-dom')

const app = function() {

	const BlogView = React.createClass({
	
		render: function(){
			return(
				<div>

					<Header />
					<Content />
					<SubBox />

					{/*<Header />
					<Content />
					<Subscriber />*/}

				</div>
			)
		}

	})


	const Header = React.createClass({

		render: function(){
			return(
				<div className="headerContainer">
					<img className="skyLine" src="http://magentanova.github.io/html-intro-1/images/houston.jpg" />
					<img className="icon" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
				</div>
			)
		}

	})

	const Content = React.createClass({

		render: function(){
			return(
				<div className="contentContainer align-children" >
					<div className="leftSearch">
						<h3>The Iron Yard Houston</h3>
						<p>Happenings and updates from the Iron Yard in Houston, Tx </p>

						<div className="searchContainer">
							<p>SEARCH</p>
							<input type="text"></input>
						</div>

					</div>
					<div className="mainContent">
						<h1>September 22 Starts a New Class of The Iron Yard Houston Students </h1>
						<p className="byline">By Brian Dorton, Campus Director at The Iron Yard Houston</p>

						<div className="classroom">
							<img className="classroomPic" src="http://magentanova.github.io/html-intro-1/images/classroom.jpg" />
						</div>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

					</div>
				</div>
			)
		}
	})

	var SubBox = React.createClass({
		render: function(){
			return (
				<div className="subscribeBox">

					<div className="subBoxTop"> Never miss a post!</div>

					<div className="followContainer">

						<div className="imgContainer">
							<img className="tinyLogo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" />
						</div>

						<div className="subBoxFollow">
							<span className="tiy1">tiyhouston</span>
							<span className="tiy2">The Iron Yard | Houston</span>
						</div>

						<div className="buttonContainer">
							<button className="followButton"> + Follow </button>
						</div>

					</div>

				</div>
			)
		}
	})

	ReactDOM.render(<BlogView/>,document.querySelector('.container'))
}

app()








