import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import SortableTree from 'react-sortable-tree';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui-icons/ModeEdit';

const styles = {
    root: {
        'padding': '40px 30px',
    },
    container: {
        'display': 'flex',
        'flex-wrap': 'wrap',
        'margin': '0',
    },
};
type State = {};

class Menus extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        treeData: [{}],
    };
    constructor(props: any) {
        super(props);

        this.state = {
            treeData: [
                {
                    id: 1,
                    title: '产品中心',
                    children: [],
                },
                {
                    expanded: true,
                    id: 2,
                    title: '新闻资讯',
                    children: [
                        {
                            id: 21,
                            title: '媒体报道',
                            children: [],
                        },
                        {
                            id: 22,
                            title: '行业资讯',
                            children: [
                                {
                                    id: 221,
                                    title: '资讯1-1',
                                    children: [],
                                },
                            ],
                        },
                        {
                            id: 23,
                            title: '企业公告',
                            children: [],
                        },
                    ],
                },
                {
                    id: 3,
                    title: '视频中心',
                    children: [
                        {
                            id: 31,
                            title: '新闻XXX',
                            children: [],
                        },
                    ],
                },
                {
                    id: 4,
                    title: '其他资讯',
                    children: [
                        {
                            id: 41,
                            title: '0109资讯1-1',
                            children: [],
                        },
                        {
                            id: 42,
                            title: '0109资讯1-2',
                            children: [],
                        },
                    ],
                },
            ],
        };
    }
    handleClickEdit = (pro: any) => {
        window.console.log(pro);
    };
    render() {
        // const getNodeKey = ({ treeIndex }: any) => treeIndex;
        return (
            <div className="configurations">
                <p className="crumbs">
                    全局 <b>/</b> 系统插件
                </p>
                <h4 className="title">菜单管理</h4>
                <Paper className={this.props.classes.root}>
                    <div className="menus-manager">
                        <SortableTree
                            treeData={this.state.treeData}
                            onChange={treeData => this.setState({ treeData })}
                            getNodeKey={({ node }) => node.id}
                            generateNodeProps={({ node, path }) => ({
                                buttons: [
                                    <IconButton
                                         onClick={() => this.handleClickEdit(node)}
                                    >
                                        <ModeEdit />
                                    </IconButton>,
                                ],
                            })}
                        />
                    </div>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(Menus);