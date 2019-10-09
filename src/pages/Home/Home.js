import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import pageActions from '../../store/ducks/Page/page';
import modalActions from '../../store/ducks/Modal/modal'
import '../../components/Dashboard/Widget.css';
import Modal  from '../../components/commons/Modal/Modal';
import List from '../../components/commons/List/List';
import Widget from '../../components/Dashboard/Widget';
import * as _ from 'lodash';
import '../../components/Dashboard/Widget.css';

class Home extends Component {
    constructor(props){ 
        super(props);
        this.state = { page: {} }
   }

    async componentDidMount() {
        await this.props.mountList()
    }

    _onClickCallPages = (channel) => {
        if(channel) { this.props.channelPages(channel); } 
        return ;
    }

    _onClickNext = () => {
        const { page } = this.state;
        this.props.pagePersist(page)
    }

    _onSelectPage = (e) => {
        const index = e.target.value
        const { page } = this.props;
        this.setState({ page: page.data.channels[index] })  
    }


    render = () => {
        const { modal, closeModal, page } = this.props;
        const { modalOptions            } = modal;
        console.log("PAGE PROPS", this.props)
        return (
            <div className = "container">
                <div className = "grid">
                    {
                        page.pagesChannels.map((item) => {
                            return <Widget url = { item.icon }  onClick = { () => this._onClickCallPages(item.channel) } name = { item.channel } logged = { item.logged } color = { item.color } iconLogged = { item.iconLogged } key = { item.channel }/>
                        })
                    }
                </div>

                <Modal  show        = { modalOptions.show           }  
                        next        = { this._onClickNext           } 
                        data        = { page.data.channels          } 
                        channel     = { page.data.channel.channel   } 
                        handleClose = { closeModal                  } 
                        selectPage  = { this._onSelectPage          }
                        color       = { page.data.channel.color     }
                        iconLogged  = { page.data.channel.iconLogged}
                >
                    <List list = { page.data.channels } change = { this._onSelectPage }/>
                </Modal>
            </div>
        );
    }
};
const mapStateToProps = ({ page, modal, ...state }) => ({
    page,
    modal,
});


const mapDispatchToProps = dispatch => bindActionCreators({ ...pageActions, ...modalActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)