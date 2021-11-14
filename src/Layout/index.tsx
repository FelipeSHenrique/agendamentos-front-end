import * as S from './styles';
import GlobalStyles from '../Assets/GlobalStyles';

const Layout: React.FC = ({children}) => {
    return (
        <S.Container>
            {children}
            <GlobalStyles/>
        </S.Container>
    );
}

export default Layout;