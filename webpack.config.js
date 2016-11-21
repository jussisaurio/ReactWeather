var webpack = require('webpack'); //webpack utilities

module.exports = {
	entry: [
	'script!jquery/dist/jquery.min.js', // script! = scriptloader
	'script!foundation-sites/dist/foundation.min.js',
	'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname, 
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			About: 'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
			WeatherResult: 'app/components/WeatherResult.jsx',
			openWeatherMap: 'app/api/openWeatherMap.jsx'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {

		loaders: [
			{
				loader: 'babel-loader', 
				query: {
					presets: ['react', 'stage-3']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: '#inline-source-map'
};