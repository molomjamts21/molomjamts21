import React from 'react';
import PropTypes from 'prop-types';

class Switcher extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { isMobile: window.innerWidth <= props.breakpoint };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        const { breakpoint } = this.props;
        this.setState({ isMobile: window.innerWidth <= breakpoint });
    };

    render() {
        const { isMobile } = this.state;
        const { mobile: Mobile, desktop: Desktop, ...rest } = this.props;

        if (isMobile && Mobile) return <Mobile {...rest} />;
        if (Desktop) return <Desktop {...rest} />;

        return null;
    }
}

Switcher.propTypes = {
    breakpoint: PropTypes.number,
    mobile: PropTypes.any,
    desktop: PropTypes.any,
};

Switcher.defaultProps = { breakpoint: 992 };

export default Switcher;
