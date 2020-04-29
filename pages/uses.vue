<template>
	<main class="page page--about">
		<Heading
			class="background--skyblue"
			title="What I use, at work and at home."
		/>
		<Content class="background--icelight">
			<h3>
				So, I find it really interesting to see what other people use, and why
				they use it. Sometimes it’s interesting, sometimes it just gives a
				little insight. Sometimes you see something new and are like “He, why
				didn’t I know about this”. In that sense, here is my setup!
			</h3>
		</Content>

		<Content>
			<h2>Hardware</h2>
			<h4>
				At home and at work I have a similar setup and some things are of course
				going with me back and forwards.
			</h4>
			<Row>
				<Item title="Computers">
					A 13″ <strong>Macbook Pro</strong> (2019) with 16gb. The 13″ is
					perfectly portable since I have to carry it around all day long. Also
					I work with bigger screens, I actually had the choice, but I still
					went for the 13”. The Oldy; a 21″ <strong>iMac</strong> from 2010.
					This computer has travelled with me to many locations and did function
					for a long time. At the moment its just my data center and used for an
					occasional browse.
				</Item>
				<Item title="Phone">
					An <strong>iPhone XS</strong> which I usually trade in every two
					years. Coming from Blackberries which I really liked and was
					hesitating to trade in until Blackberry really was dead, I’m not caged
					in by Apple, but I don’t mind.
				</Item>
				<Item title="Monitor">
					The <strong>LG 27UK670</strong>, I would love to have a “better”
					monitor, actually just a old cinema display with USB-C and 4K display
					would be perfect, but that doesn’t exist.
				</Item>
				<Item title="Mouse & Keyboard">
					Just Apple all the way. As well as on my current work as at home I use
					a black <strong>Magic Keyboard </strong> and
					<strong>Magic Trackpad</strong>.
				</Item>
				<Item title="Data">
					A series of little orange <strong>Lacie Rugged</strong> disks. I
					unfortunately cant really use them with my Macbook Pro anymore, but
					they are still really nice and sustainable drives.
				</Item>
				<Item title="Tablet">
					An old and crappy <strong>iPad Air</strong> which still works and
					usually only comes with me in the airplane. I can’t use the headphone
					jack so use it with my headphones and the little extender which I need
					for my phone anyway. It could have been nice actually, but one day.. I
					decided to fix the (broken) screen myself. That wasn't a success.
					Since then the headphone jack is wack and the home buttons doesnt work
					anymore. A iPad pro is very high on my wishlist.. but yeah...
				</Item>
				<Item title="Drawing">
					My Wacom! At work I still have the older
					<strong>wacom Intuos 3 A4</strong>. And didn't buy a new one because I
					don't have the money for it (which is also true), but mainly because
					the old just works. I have experience with the new models, but in some
					way they always end up not working.
				</Item>
				<Item title="Camera">
					Most pictures nowadays I take just using my iPhone. Why? Because I’m
					too lazy to carry my camera bag around. Although I really should do
					that more. My camera bag a Crumpler which my wife calles “the Turtle”
					includes a
					<strong>Canon 6D</strong>, a Canon 60D and a few lenses; Canon 50mm
					F2.8, Canon EF 17-40mm F4 and a Canon EF 70-200mm F4
				</Item>
			</Row>
		</Content>

		<Content class="background--black">
			<h2>Editor & Terminal</h2>
			<h4>
				Editors and terminals are changing a lot, at the moment I’m using VSCode
				and iTerm, but this might change any moment. I have tried many other
				editors, but keep coming back. Here’s how it evolved…
			</h4>
			<Row>
				<Item title="Visual Studio Code">
					Through the years I’ve used many code editors, started coding in plain
					Notepad, went to Dreamweaver, back to Notepad because it was lighter,
					Notepad++ because it gave me highlighting and later I got a Mac, back
					to Texteditor. Eventually that didn’t make sense and I needed an
					“actual” editor so I started using Coda. Which I actually till the day
					of today still use for opening single code files or even edit my
					invoices in. From Coda I went to Atom, which has been my code editor
					for a long time, but recently, like a year ago I moved on. Left Atom
					where it is and moved to VS Code, it was a pain in the ass in the
					beginning, but I can’t go back anymore!
				</Item>
				<Item title="iTerm">
					What can I say? Since the day it came out, I’ve been using iTerm and
					never went away from it. I install my own colorschemes and just go
					with it. I have tried some other editors in the meanwhile but keep
					coming back.
				</Item>
			</Row>
		</Content>
		<Content class="background--icelight">
			<h2>
				Frameworks &amp; Libraries
			</h2>
			<h4>
				Over the years, we use many frameworks and libraries to build our apps
				and websites. This is an overview of the frameworks and libraries I
				like, or just use.
			</h4>
			<Row>
				<Item title="Sass">
					<p>
						CSS, Sass… working with that I enjoy the most. Trying to create
						websites with the best styling and animations in lightweight way.
						Sass is giving me that. CSS-in-JS is nice and all, but no… Just give
						me Sass.
					</p>
					<a
						href="https://sass-lang.com/"
						aria-label="Read more about Sass"
						class="button button--magentalight button--default"
						><span class="button__text">
							Sass
						</span>
					</a>
				</Item>

				<Item title="Vue">
					<p>
						Coming from JQuery, AngularJS and having played with React and
						Angular… Vue is just, relieve! I love Vue and what it stands for,
						the way it works and intuitivety.
					</p>
					<a
						href="https://vuejs.org/"
						aria-label="Read more about Vue"
						class="button button--magentalight button--default"
						><span class="button__text">
							VueJS
						</span>
					</a>
				</Item>
				<Item title="NuxtJS"
					><p>
						Nuxt is just… Well! Everything runs on it. Every time I start a
						project, I fire up a new Nuxt project. It just makes it easy with
						everything included in a fast and easy way.
					</p>
					<p>
						We have actually created our own
						<code>npx create-henris-project</code> setup projects even easier in
						combination with Henri’s and some extra settings
					</p>
					<a
						href="https://nuxtjs.org/"
						aria-label="Read more about NuxtJS"
						class="button button--magentalight button--default"
						><span class="button__text">
							NuxtJS
						</span>
					</a>
				</Item>
				<Item title="Henri’s">
					<p>
						A Sass Toolset, the Sass framework which doesn’t give styling but
						just a very good set of different functions and mixins to actually
						build things yourself without having to override given styling.
					</p>
					<a
						href="https://henris.style"
						aria-label="Read more about Henri's"
						class="button button--magentalight button--default"
						><span class="button__text">
							Henri's
						</span>
					</a>
				</Item>
				<Item title="Guyn">
					<p>
						My own color library, as simple implementable library which give me
						all the colors you see here. I got annoyed of having to pick colors
						every time for all projects, also to keep all my projects a little
						bit insync and have them the same colorways made it better. Thats
						why I created this libary.
					</p>
					<a
						href="https://www.guyn.nl"
						aria-label="Read more about Guyn"
						class="button button--magentalight button--default"
						><span class="button__text">
							Guyn
						</span>
					</a>
				</Item>
			</Row>
		</Content>
		<Content class="background--blue">
			<h2>Tools &amp; Plugins</h2>
			<h4>
				A wide variation of tools, for designing purposes and development. I use
				them all at the same time and love to open so many tabs In my browser
				taht eventually I just close the whole browser all together. These are
				my go to tools and plugins.
			</h4>
			<Row>
				<Item title="Slack">
					<p>
						My main messaging app, where I communicate with my coworkers and
						more and more people actually…
					</p>
					<a
						href="https://www.slack.com/"
						aria-label="Read more about Slack"
						class="button button--magentalight button--default"
					>
						<span class="button__text">
							Slack
						</span>
					</a>
				</Item>

				<Item title="Sketch"
					><p>
						The app I use to do some design work, even though I still don’t
						completely understand certain choices they made. It’s a cool app and
						lightweight.
					</p>
					<a
						href="https://www.sketch.com/"
						aria-label="Read more about Sketch"
						class="button button--magentalight button--default"
						><span class="button__text">
							Sketch App
						</span>
					</a>
				</Item>
				<Item title="Zeplin">
					<p>
						The easiest way to just scroll through designs and while developing
						things to measure and extract certain assets without having to open
						all sketch files and find you way through designers messes 😃
					</p>
					<a
						href="https://www.zeplin.io/"
						aria-label="Read more about Zeplin"
						class="button button--magentalight button--default"
						><span class="button__text">
							Zeplin
						</span>
					</a>
				</Item>
				<Item title="Adobe Illustrator"
					><p>
						Ever since the day i finally knew how it worked, this is my go to
						tool. I love Illustrator, even though Adobe is making it less and
						less workable.
					</p>
					<a
						href="https://www.adobe.com/illustrator"
						aria-label="Read more about Adobe Illustrator"
						class="button button--magentalight button--default"
						><span class="button__text">
							Illustrator
						</span>
					</a>
				</Item>
				<Item title="Adobe Photoshop"
					><p>
						The amount of hours I spent in Photoshop I don’t even wanna think
						about. It’s getting slower by the version while my computer is
						getting faster, but yeah… Thats Adobe, I don’t think they actually
						care.
					</p>
					<a
						href="https://www.adobe.com/photoshop"
						aria-label="Read more about Adobe Photoshop"
						class="button button--magentalight button--default"
						><span class="button__text">
							Photoshop
						</span>
					</a>
				</Item>
				<Item title="Sequel Pro"
					><p>
						Mysql databases made easy. Before I was digging around in Phpmyadmin
						but ever since Sequel Pro, I really can’t anymore.
					</p>
					<a
						href="https://www.sequelpro.com/"
						aria-label="Read more about Sequel Pro"
						class="button button--magentalight button--default"
						><span class="button__text">
							Sequel Pro
						</span>
					</a>
				</Item>
				<Item title="Tower"
					><p>
						It’s not that I don’t know the git commands, its just sometimes
						making it easier to see what’s actually happening and make sure I
						didn’t forget to&nbsp;<code>git add</code>.
					</p>
					<a
						href="https://www.git-tower.com/"
						aria-label="Read more about Tower"
						class="button button--magentalight button--default"
						><span class="button__text">
							Tower
						</span>
					</a>
				</Item>
				<Item title="Postman"
					><p>
						Checking all your api requests made visual. It just makes it easy.
					</p>
					<a
						href="https://www.getpostman.com/"
						aria-label="Read more about Postman"
						class="button button--magentalight button--default"
						><span class="button__text">
							Postman
						</span>
					</a>
				</Item>
				<Item title="Vue Devtools"
					><p>
						I don’t think I can ever develop Vue anymore without it. Love it!
					</p>
					<a
						href="https://github.com/vuejs/vue-devtools"
						aria-label="Read more about Vue Devtools"
						class="button button--magentalight button--default"
						><span class="button__text">
							Vue Devtools on GitHub
						</span>
					</a>
				</Item>
				<Item title="Wordpress"
					><p>
						Actually not a real fan, but it works. I like to simply host my CMS
						myself instead of using services for this. I have built my own CMS’s
						before like many did, but for now kinda stuck on WordPress until I
						find something which works better and give me the freedom of hosting
						it myself.
					</p>
					<a
						href="https://www.wordpress.org/"
						aria-label="Read more about Wordpress"
						class="button button--magentalight button--default"
						><span class="button__text">
							Wordpress
						</span>
					</a>
				</Item>
				<Item title="Dropbox"
					><p>
						I have tried working with Google Drive, but I really can’t. Dropbox
						just works and easy.
					</p>
					<a
						href="https://www.dropbox.com/"
						aria-label="Read more about Dropbox"
						class="button button--magentalight button--default"
						><span class="button__text">
							Dropbox
						</span>
					</a>
				</Item>
				<Item title="Stack"
					><p>
						They gave me 1tb for free in the beginning. So yes, still using it!
					</p>
					<a
						href="https://www.transip.nl/stack/"
						aria-label="Read more about Stack"
						class="button button--magentalight button--default"
						><span class="button__text">
							Stack
						</span>
					</a>
				</Item>
				<Item title="Itsycal"
					><p>
						A little tool which lives in the top of my screen. Easy to navigate
						through the calendar just to look up what day a certain date is. I
						was doing this for a long time in calendar, but this is making it
						just 10x easier.
					</p>
					<a
						href="https://www.mowglii.com/itsycal/"
						aria-label="Read more about Itsycal"
						class="button button--magentalight button--default"
						><span class="button__text">
							ItsyCal
						</span>
					</a>
				</Item>
			</Row>
		</Content>
		<Content class="background--red">
			<h2>Online &amp; Services</h2>
			<h4>
				Like everyone else I make use of a few services to make my life a
				entertainment of to make things easier.
			</h4>
			<Row
				><Item title="Youtube Premium">
					<p>
						We do have cable at home, but both TV’s are not connected. I usually
						don’t like watching anything on dutch tv and commercials just make
						me annoyed. Youtube premium finally gave me the option to disable
						the ads in videos and also a replacement for Spotify for the same
						price. After experiencing how life was with ads while on vacation
						where Premium didn’t work… I really enjoy Youtube Premium 😃
					</p>
					<a
						href="https://www.youtube.com/premium"
						aria-label="Read more about Youtube Premium"
						class="button button--magentalight button--default"
						><span class="button__text">
							Youtube Premium
						</span>
					</a>
				</Item>
				<Item title="Netflix">
					<p>
						A lack of Tv isn’t fully covered by Youtube, Netflix also really
						helps! Although I am…really curious about what Disney is going to
						do.
					</p>
					<a
						href="https://www.netflix.com/"
						aria-label="Read more about Netflix"
						class="button button--magentalight button--default"
						><span class="button__text">
							Netflix
						</span>
					</a>
				</Item>
				<Item title="Netlify"
					><p>
						The easiest way to deploy my static websites (including this one). I
						truely love Netlify’s experience and want to do more and more with
						it!
					</p>
					<a
						href="https://www.netlify.com/"
						aria-label="Read more about Netlify"
						class="button button--magentalight button--default"
						><span class="button__text">
							Netlify
						</span>
					</a>
				</Item>
				<Item title="Versio">
					<p>
						Most of the domains I own I have registered by Versio, a dutch
						company which is really cheap. Also websites, projects and apps
						which I personally make are hosted there. Am I really happy with it?
						Well… price-wise yes.
					</p>
					<a
						href="https://www.versio.nl"
						aria-label="Read more about Versio"
						class="button button--magentalight button--default"
						><span class="button__text">
							Versio
						</span>
					</a>
				</Item>
				<Item title="NameCheap">
					<p>
						Versio doesn’t do all extensions, for the rest Namecheap is usually
						my go to.
					</p>
					<a
						href="https://www.namecheap.com"
						aria-label="Read more about NameCheap"
						class="button button--magentalight button--default"
						><span class="button__text">
							NameCheap
						</span>
					</a>
				</Item>
				<Item title="GitHub">
					<p>
						My daily versioning tool, I really like Github and its getting
						better and better. A few months ago it got free for private
						repositories, but I’m still paying for it. A good daily service
						deserves it.
					</p>
					<a
						href="https://www.github.com"
						aria-label="Read more about GitHub"
						class="button button--magentalight button--default"
						><span class="button__text">
							GitHub
						</span>
					</a>
				</Item>
			</Row>
		</Content>
	</main>
</template>
<script lang="ts">
import Vue from 'vue';
import { Content, Row, Item, Heading } from '@/components';

export default Vue.extend({
	components: {
		Content,
		Heading,
		Row,
		Item
	}
});
</script>
<style lang="scss">
.content-item {
	transform: scale(0.5);
	transition: transform 0.5s ease-in-out;
	.is-inview & {
		transform: scale(1);
	}
}
</style>
