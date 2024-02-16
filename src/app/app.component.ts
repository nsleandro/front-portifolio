import { Component } from '@angular/core';
import { MoveDirection, OutMode } from "tsparticles-engine";
import { loadSlim } from 'tsparticles-slim';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'portifolio';

  menuOpened = false

  id = "tsparticles";

	particlesOptions = {
		fullScreen: {
			enable: true,
			zIndex: 0,
		},
		style: {
			position: 'absolute',
		},

		fpsLimit: 120,
	
		particles: {
			color: {
				value: "#0FFF50",
			},
			links: {
				color: "#0FFF50",
				distance: 70,
				enable: true,
				opacity: 0.5,
				width: 0.3,
			},
			move: {
				direction: MoveDirection.none,
				enable: true,
				outModes: {
					default: OutMode.bounce,
				},
				random: true,
				speed: 2.5,
				straight: false,
			},
			number: {
				density: {
					enable: true,
					area: 200,
				},
				value: 40,
			},
			opacity: {
				value: 0.2,
			},
			shape: {
				type: "circle",
			},
			// size: {
			// 	value: { min: 4, max: 5 },
			// },
		},
      // events: {
    //   onclick: { enable: true, mode: "push" },
    //   onhover: {
    //     enable: true,
    //     mode: "bubble",
    //     parallax: { enable: false, force: 60, smooth: 10 }
    //   },
    // },
    // interactivity: {
		// 	modes: {
		// 		push: {
		// 			quantity: 4,
		// 		},
		// 		repulse: {
		// 			distance: 200,
		// 			duration: 0.4,
		// 		},
		// 	},
		// },
		// detectRetina: false
	};

	async particlesInit(engine: any): Promise<void> {
		await loadSlim(engine);
	}
}
