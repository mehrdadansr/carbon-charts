import React from 'react';
import { AreaChart as AC } from '@carbon/charts';
import BaseChart from './base-chart';
import { ChartConfig, AreaChartOptions } from '@carbon/charts/interfaces';
import { hasChartBeenInitialized } from './utils';

type AreaChartProps = ChartConfig<AreaChartOptions>;

export default class AreaChart extends BaseChart<AreaChartOptions> {
	chartRef!: HTMLDivElement;
	props!: AreaChartProps;
	chart!: AC;

	componentDidMount() {
		if (hasChartBeenInitialized(this.chartRef) === false) {
			this.chart = new AC(this.chartRef, {
				data: this.props.data,
				options: this.props.options,
			});
		}
	}

	render() {
		return (
			<div
				ref={(chartRef) => (this.chartRef = chartRef!)}
				className="chart-holder"></div>
		);
	}
}
