import React, { Component } from "react";

function HOC(Component){
    return class extends React.Component{
        constructor(props) {
            super(props)
            this.state = {
                searchedBook : "",
                searchedArticle: "",
            }
        }
        handleBookSearch = ({target :{value }}) => {
            this.setState({
                searchedBook: value,
            })
        }
        handleArticleSearch = ({target :{value }}) => {
            this.setState({
                searchedArticle: value,
            })
        }

        render(){
            return(
                <Component 
                handleBookSearch={this.handleBookSearch} 
                searchedBook = {this.state.searchedBook}
                handleArticleSearch={this.handleArticleSearch}
                searchedArticle={this.state.searchedArticle}
                />
            )
        }
    }
}
export default HOC;