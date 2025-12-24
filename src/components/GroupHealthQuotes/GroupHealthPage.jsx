import { useSelector } from 'react-redux';  // Missing import
import StepTwoForm from './StepTwoForm';
import StepOneForm from './StepOneForm';
import PlanSelection from './PlanSelection';

const GroupHealthPage = () => {
    const step = useSelector( state => state.groupHealth.step );  // Fixed hook usage

    return (
        <>
            { step === 1 && <StepOneForm /> }
            { step === 2 && <StepTwoForm /> }
            { step === 3 && <PlanSelection /> }
        </>
    );
};

export default GroupHealthPage