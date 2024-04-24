
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { OnPointerDownScript } from "@phasereditor2d/scripts-core";
import { PushActionScript } from "@phasereditor2d/scripts-simple-animations";
import { OnAwakeScript } from "@phasereditor2d/scripts-core";
import { MoveInSceneActionScript } from "@phasereditor2d/scripts-simple-animations";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// matter_platformer_1
		const matter_platformer_1 = this.add.tilemap("matter-platformer_1");
		matter_platformer_1.addTilesetImage("kenney_redux_64x64", "kenney_redux_64x64");
		matter_platformer_1.addTilesetImage("Terrain32x32", "Terrain32x32");
		matter_platformer_1.addTilesetImage("fantasy-tiles", "fantasy-tiles");
		matter_platformer_1.addTilesetImage("1560", "1560");
		matter_platformer_1.addTilesetImage("wario-tiles", "wario-tiles");

		// fufuSuperDino
		const fufuSuperDino = this.add.image(511, 253, "FufuSuperDino");

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(fufuSuperDino);

		// pushAction
		new PushActionScript(onPointerDownScript);

		// onAwakeScript_1
		const onAwakeScript_1 = new OnAwakeScript(fufuSuperDino);

		// moveInSceneActionScript_1
		const moveInSceneActionScript_1 = new MoveInSceneActionScript(onAwakeScript_1);

		// text
		const text = this.add.text(640, 458, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Phaser 3 + Phaser Editor 2D\nWebpack + TypeScript";
		text.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "3em" });

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(text);

		// moveInSceneActionScript
		const moveInSceneActionScript = new MoveInSceneActionScript(onAwakeScript);

		// capa_de_patrones
		matter_platformer_1.createLayer("Capa de patrones 2", ["wario-tiles"], 0, 0);

		// moveInSceneActionScript_1 (prefab fields)
		moveInSceneActionScript_1.from = "TOP";

		// moveInSceneActionScript (prefab fields)
		moveInSceneActionScript.from = "BOTTOM";

		this.matter_platformer_1 = matter_platformer_1;

		this.events.emit("scene-awake");
	}

	private matter_platformer_1!: Phaser.Tilemaps.Tilemap;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
