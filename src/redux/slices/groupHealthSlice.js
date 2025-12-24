import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const submitGroupHealth = createAsyncThunk(
    "groupHealth",
    async ( data, { rejectWithValue } ) => {
        try {
            const res = await api.post( "/groupHealthQuotes", data );
            return res.data;
        } catch {
            return rejectWithValue( "Submission failed" );
        }
    }
);

const groupHealthSlice = createSlice( {
    name: "groupHealth",
    initialState: {
        step: 1,
        formData: {
            // STEP 1
            company: "",
            pincode: "",
            email: "",
            mobile: "",

            // STEP 2
            firstTime: "yes",
            employees: 0,
            familyDefinition: "",
            sumInsured: ""
        },
        selectedPlan: null,
        loading: false,
        error: null,
        success: false
    },
    reducers: {
        saveStepData: ( state, action ) => {
            state.formData = { ...state.formData, ...action.payload };
        },
        savePlan: ( state, action ) => {
            state.selectedPlan = action.payload;
            state.step = 3;
        },
        nextStep: ( state ) => {
            state.step += 1;
        },
        prevStep: ( state ) => {
            state.step -= 1;
        },
        resetForm: ( state ) => {
            state.step = 1;
            state.formData = {};
            state.selectedPlan = null;
            state.success = false;
        }
    },
    extraReducers: ( builder ) => {
        builder
            .addCase( submitGroupHealth.pending, ( state ) => {
                state.loading = true;
            } )
            .addCase( submitGroupHealth.fulfilled, ( state ) => {
                state.loading = false;
                state.success = true;
            } )
            .addCase( submitGroupHealth.rejected, ( state, action ) => {
                state.loading = false;
                state.error = action.payload;
            } );
    }
} );

export const {
    saveStepData,
    savePlan,
    nextStep,
    prevStep,
    resetForm
} = groupHealthSlice.actions;

export default groupHealthSlice.reducer;
