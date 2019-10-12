class Shade {

	constructor() {

		this.R = 0+','+2 
		this.G = 2+','+4 
		this.B = 4+','+6 
	}

	get(background,foreground,opacity) {

		opacity = Number(opacity)
		opacity = opacity < 100 ? opacity : 100
		opacity /= 100

		let R_back = this.HexToDec(background,'R');
		let G_back = this.HexToDec(background,'G');
		let B_back = this.HexToDec(background,'B');

		let R_fore = this.HexToDec(foreground,'R');
		let G_fore = this.HexToDec(foreground,'G');
		let B_fore = this.HexToDec(foreground,'B');


		// eq. output = back + (fore-back)*opacity

		let R_new = R_back + Math.round(R_fore*opacity) - Math.round(R_back*opacity)
		let G_new = G_back + Math.round(G_fore*opacity) - Math.round(G_back*opacity)
		let B_new = B_back + Math.round(B_fore*opacity) - Math.round(B_back*opacity)

				
		let colorHEX = '#'+ this.DecToHex(R_new) + this.DecToHex(G_new) + this.DecToHex(B_new)
		let colorRGB = 'rgb('+ R_new +','+ G_new +','+ B_new +')'

		return [	
			colorHEX,
			colorRGB
		]
	}

	HexToDec(hex,channel) {		
		let from = Number(this[channel].charAt(0))
		let to = Number(this[channel].charAt(2))
		
		return parseInt((this.cutHex(hex)).substring(from,to),16)
	}

	cutHex(hex) {
		return (hex.charAt(0)=="#") ? hex.substring(1,7):hex
	}

	DecToHex(dec) {
		return this.pad(dec.toString(16))
	}

	pad(d) {
    	return (d.length < 2) ? '0' + d.toString() : d;
	}	
}

let MyShade = new Shade