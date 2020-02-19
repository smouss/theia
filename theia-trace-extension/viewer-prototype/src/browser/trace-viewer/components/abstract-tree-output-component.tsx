import { AbstractOutputComponent, AbstractOutputProps, AbstractOutputState } from './abstract-output-component';
import * as React from 'react';
import { QueryHelper } from 'tsp-typescript-client/lib/models/query/query-helper';
import { ResponseStatus } from 'tsp-typescript-client/lib/models/response/responses';
import { Entry, EntryHeader } from 'tsp-typescript-client/lib/models/entry';


export abstract class AbstractTreeOutputComponent<P extends AbstractOutputProps, S extends AbstractOutputState> extends AbstractOutputComponent<P, S> {
    renderMainArea(): React.ReactNode {
        const treeWidth = this.props.style.width - this.props.style.chartWidth - this.getHandleWidth();
        return <React.Fragment>

            <div className='output-component-tree' id='componentTree' onScroll={()=>this.ScrollSync("componentTree")} style={{ width: treeWidth, height: this.props.style.height }}>
                {this.renderTree()}
            </div>
            <div className='output-component-chart' id="componentChart" style={{ width: this.props.style.chartWidth, backgroundColor: '#3f3f3f' }}>
                {this.renderChart()}
               
            </div>
        </React.Fragment>;
    }


    ScrollSync(id: string) {
        var leftDiv = document.getElementById("componentTree");
        var rightDiv = document.getElementById("timegraph-main");

        if (id=="componentTree" && rightDiv != null && leftDiv !=null ) {
            rightDiv.scrollTop = leftDiv.scrollTop;
            console.log("Scrolling Tree");
        }
        else if (leftDiv != null && id=="timegraph-main" && rightDiv !=null){
            leftDiv.scrollTop = rightDiv.scrollTop;
            console.log("Scrolling Chart");
        }
    }
        

    abstract renderTree(): React.ReactNode;

    abstract renderChart(): React.ReactNode;

    protected async waitAnalysisCompletion() {
        const traceUUID = this.props.traceId;
        const tspClient = this.props.tspClient;
        const outPutId = this.props.outputDescriptor.id;

        // TODO Use the output descriptor to find out if the analysis is completed
        const xyTreeParameters = QueryHelper.selectionTimeQuery(
            QueryHelper.splitRangeIntoEqualParts(this.props.range.getstart(), this.props.range.getEnd(), 1120), []);
        let xyTreeResponse = (await tspClient.fetchXYTree<Entry, EntryHeader>(traceUUID, outPutId, xyTreeParameters)).getModel();
        while (xyTreeResponse.status === ResponseStatus.RUNNING) {
            xyTreeResponse = (await tspClient.fetchXYTree<Entry, EntryHeader>(traceUUID, outPutId, xyTreeParameters)).getModel();
        }
        this.setState({
            outputStatus: xyTreeResponse.status
        });
    }
}