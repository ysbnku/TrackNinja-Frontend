//COMPONENTS
import MainWrapper from '../layout/MainWrapper';

//CSS
import './ErrorComponent.css';

interface ErrorComponentProps {
  errorMessage: string;
}

const ErrorComponent = (props: ErrorComponentProps) => {
  return (
    <MainWrapper isDetails={true} message="Track Ninja">
      <div className="error-wrapper mt-sm-5 pt-sm-5">
        <div className="row d-flex justify-content-center mt-5 pt-5">
          <div className="container">
            <div className="row d-flex justify-content-center my-2 text-center">
              <div className="col-9">
                <h1 className="error-page-body__message mt-5 pt-3">
                  Error Component{' '}
                  <a className="redirect-link" href="/">
                  Error Component redirect-link
                  </a>{' '}
                  Error Component
                </h1>
                <h2 className="text-left mt-5 pt-2">
                  <strong>Motivo do erro: &nbsp; </strong>
                  {props.errorMessage}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default ErrorComponent;
