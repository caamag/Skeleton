import * as _ from "./style";
import Logo from "../../assets/logo.png";

//components
import { Button } from "../../components/atoms/Button";

interface AuthProps {
  togglePage: () => void;
}

const RegisterPage = ({ togglePage }: AuthProps) => {
  return (
    <_.Container>
      <_.Content>
        <_.Logo src={Logo} />

        <h1>Create your account!</h1>

        <input type="text" name="email" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="password" placeholder="Confirm password" />

        <Button isPrimary>Create Account</Button>

        <_.ChangeVisibilityContainer>
          Have an account? <span onClick={togglePage}>Log in</span>
        </_.ChangeVisibilityContainer>
      </_.Content>
    </_.Container>
  );
};

export default RegisterPage;
