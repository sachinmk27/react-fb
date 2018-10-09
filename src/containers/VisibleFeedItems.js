import { connect } from "react-redux";
import FeedItemList from "../components/FeedItemsList";
import { TestSelectors } from "../actions";

const getVisibleFeedItems = (feedItems, selector) => {
    console.log(feedItems, selector)
    switch(selector) {
        case TestSelectors.TEXT_ONLY:
            return feedItems.filter(item => item.item_description.length && item.image.length === 0);
        case TestSelectors.IMAGES_ONLY:
            return feedItems.filter(item => item.item_description.length === 0 && item.image.length);
        case TestSelectors.IMAGE_AND_TEXT:
            return feedItems.filter(item => item.item_description.length && item.image.length);
        case TestSelectors.NO_ITEMS:
            return [];
        default:
            throw new Error('Unkown selector: ' + selector);
    }
}

const mapStateToProps = state => ({
    feedItems: getVisibleFeedItems(state.feedItems, state.selector)

});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedItemList);