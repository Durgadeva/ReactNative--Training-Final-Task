import React, { Component } from "react";
import {View, Button, Text,FlatList} from "react-native";
import ProductListItem from '../components/ProductListItem';
import * as actionCreators from '../actionCreators/product';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SearchBar} from "react-native-elements";

let URI = "http://172.16.100.23:4000";

export class Search extends Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return (
            <View>
                    <SearchBar
                        onChangeText={(text)=>{
                            if(text.length>0){
                                this.props.actions.searchProduct(text)
                            }
                            else{
                                this.props.actions.searchProduct(text)
                            }
                        }}
                        showLoading
                        platform="ios"
                        placeholder='Type Here...' />
                    {this.props.searchbarNotEmpty ?<FlatList
                        data={this.props.products}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
          />:null}
                    
             </View>

               
        );
    }

    onWishTapped=id=>{
        this.props.actions.addProdtoWish(id);
    }

    _renderItem = ({ index, item }) => {
        return (
          <ProductListItem
            {...this.props}
            id={item.id}
            title={`${item.id} - ${item.title}`}
            image={item.image ? `${URI}/images/${item.image}` : null}
            rating={item.rating}
            price={item.price}
            wish={item.wish || false}
            onWishTapped={this.onWishTapped}
            
          />
        );
      };
}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(actionCreators,dispatch)
    }
}


function mapStateToProps(state)
{
    return{
        products: state.productState.searchList,
        isLoading: state.productState.isLoading,
        searchbarNotEmpty:state.productState.isSearch 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);