export const Header = ({ state, setParams, navigate }) => ({
  left: (<Button
      title={'Menu'}
      onPress={() => navigate('DrawerOpen')}
    />),
});

export default Header;
