import mongoose from "mongoose";


const assessmentSchema = new mongoose.Schema({
   step: String,
   schoolType: String,
   schoolGrade: String,
   birthday: Date,
   gender: String,
   email: String,
   IQ: {
      type: {
         _id: false,
         total: Number,
         options: {
            _id: false,
            i1: { selected: Number, point: Number, _id: false },
            i2: { selected: Number, point: Number, _id: false },
            i3: { selected: Number, point: Number, _id: false },
            i4: { selected: Number, point: Number, _id: false },
            i5: { selected: Number, point: Number, _id: false },
            i6: { selected: Number, point: Number, _id: false },
            i7: { selected: Number, point: Number, _id: false },
            i8: { selected: Number, point: Number, _id: false },
            i9: { selected: Number, point: Number, _id: false },
            i10: { selected: Number, point: Number, _id: false },
            i11: { selected: Number, point: Number, _id: false },
            i12: { selected: Number, point: Number, _id: false },
            i13: { selected: Number, point: Number, _id: false },
            i14: { selected: Number, point: Number, _id: false },
            i15: { selected: Number, point: Number, _id: false },
            i16: { selected: Number, point: Number, _id: false },
            i17: { selected: Number, point: Number, _id: false },
            i18: { selected: Number, point: Number, _id: false },
            i19: { selected: Number, point: Number, _id: false },
            i20: { selected: Number, point: Number, _id: false },
            i21: { selected: Number, point: Number, _id: false },
            i22: { selected: Number, point: Number, _id: false },
            i23: { selected: Number, point: Number, _id: false },
            i24: { selected: Number, point: Number, _id: false },
            i25: { selected: Number, point: Number, _id: false },
            i26: { selected: Number, point: Number, _id: false },
            i27: { selected: Number, point: Number, _id: false },
            i28: { selected: Number, point: Number, _id: false },
            i29: { selected: Number, point: Number, _id: false },
            i30: { selected: Number, point: Number, _id: false },
            i31: { selected: Number, point: Number, _id: false },
            i32: { selected: Number, point: Number, _id: false },
            i33: { selected: Number, point: Number, _id: false },
            i34: { selected: Number, point: Number, _id: false },
            i35: { selected: Number, point: Number, _id: false },
            i36: { selected: Number, point: Number, _id: false },
            i37: { selected: Number, point: Number, _id: false },
            i38: { selected: Number, point: Number, _id: false },
            i39: { selected: Number, point: Number, _id: false },
            i40: { selected: Number, point: Number, _id: false },
            i41: { selected: Number, point: Number, _id: false },
            i42: { selected: Number, point: Number, _id: false },
            i43: { selected: Number, point: Number, _id: false },
            i44: { selected: Number, point: Number, _id: false },
            i45: { selected: Number, point: Number, _id: false },
            i46: { selected: Number, point: Number, _id: false },
            i47: { selected: Number, point: Number, _id: false },
            i48: { selected: Number, point: Number, _id: false },
            i49: { selected: Number, point: Number, _id: false },
            i50: { selected: Number, point: Number, _id: false },
            i51: { selected: Number, point: Number, _id: false },
            i52: { selected: Number, point: Number, _id: false },
            i53: { selected: Number, point: Number, _id: false },
            i54: { selected: Number, point: Number, _id: false },
            i55: { selected: Number, point: Number, _id: false },
            i56: { selected: Number, point: Number, _id: false },
            i57: { selected: Number, point: Number, _id: false },
            i58: { selected: Number, point: Number, _id: false },
            i59: { selected: Number, point: Number, _id: false },
            i60: { selected: Number, point: Number, _id: false },
         }
      }
   },
   SH: {
      type: {
         _id: false,
         total: Number,
         religiousHealth: Number,
         existentialHealth: Number,
         options: {
            i1: { selected: Number, point: Number, _id: false },
            i2: { selected: Number, point: Number, _id: false },
            i3: { selected: Number, point: Number, _id: false },
            i4: { selected: Number, point: Number, _id: false },
            i5: { selected: Number, point: Number, _id: false },
            i6: { selected: Number, point: Number, _id: false },
            i7: { selected: Number, point: Number, _id: false },
            i8: { selected: Number, point: Number, _id: false },
            i9: { selected: Number, point: Number, _id: false },
            i10: { selected: Number, point: Number, _id: false },
            i11: { selected: Number, point: Number, _id: false },
            i12: { selected: Number, point: Number, _id: false },
            i13: { selected: Number, point: Number, _id: false },
            i14: { selected: Number, point: Number, _id: false },
            i15: { selected: Number, point: Number, _id: false },
            i16: { selected: Number, point: Number, _id: false },
            i17: { selected: Number, point: Number, _id: false },
            i18: { selected: Number, point: Number, _id: false },
            i19: { selected: Number, point: Number, _id: false },
            i20: { selected: Number, point: Number, _id: false },
         }
      }
   },
   PF: {
      type: {
         _id: false,
         OFactor: Number,
         CFactor: Number,
         EFactor: Number,
         AFactor: Number,
         NFactor: Number,
         options: {
            _id: false,
            i1: { selected: Number, point: Number, _id: false },
            i2: { selected: Number, point: Number, _id: false },
            i3: { selected: Number, point: Number, _id: false },
            i4: { selected: Number, point: Number, _id: false },
            i5: { selected: Number, point: Number, _id: false },
            i6: { selected: Number, point: Number, _id: false },
            i7: { selected: Number, point: Number, _id: false },
            i8: { selected: Number, point: Number, _id: false },
            i9: { selected: Number, point: Number, _id: false },
            i10: { selected: Number, point: Number, _id: false },
            i11: { selected: Number, point: Number, _id: false },
            i12: { selected: Number, point: Number, _id: false },
            i13: { selected: Number, point: Number, _id: false },
            i14: { selected: Number, point: Number, _id: false },
            i15: { selected: Number, point: Number, _id: false },
            i16: { selected: Number, point: Number, _id: false },
            i17: { selected: Number, point: Number, _id: false },
            i18: { selected: Number, point: Number, _id: false },
            i19: { selected: Number, point: Number, _id: false },
            i20: { selected: Number, point: Number, _id: false },
            i21: { selected: Number, point: Number, _id: false },
            i22: { selected: Number, point: Number, _id: false },
            i23: { selected: Number, point: Number, _id: false },
            i24: { selected: Number, point: Number, _id: false },
            i25: { selected: Number, point: Number, _id: false },
            i26: { selected: Number, point: Number, _id: false },
            i27: { selected: Number, point: Number, _id: false },
            i28: { selected: Number, point: Number, _id: false },
            i29: { selected: Number, point: Number, _id: false },
            i30: { selected: Number, point: Number, _id: false },
            i31: { selected: Number, point: Number, _id: false },
            i32: { selected: Number, point: Number, _id: false },
            i33: { selected: Number, point: Number, _id: false },
            i34: { selected: Number, point: Number, _id: false },
            i35: { selected: Number, point: Number, _id: false },
            i36: { selected: Number, point: Number, _id: false },
            i37: { selected: Number, point: Number, _id: false },
            i38: { selected: Number, point: Number, _id: false },
            i39: { selected: Number, point: Number, _id: false },
            i40: { selected: Number, point: Number, _id: false },
            i41: { selected: Number, point: Number, _id: false },
            i42: { selected: Number, point: Number, _id: false },
            i43: { selected: Number, point: Number, _id: false },
            i44: { selected: Number, point: Number, _id: false },
            i45: { selected: Number, point: Number, _id: false },
            i46: { selected: Number, point: Number, _id: false },
            i47: { selected: Number, point: Number, _id: false },
            i48: { selected: Number, point: Number, _id: false },
            i49: { selected: Number, point: Number, _id: false },
            i50: { selected: Number, point: Number, _id: false },
            i51: { selected: Number, point: Number, _id: false },
            i52: { selected: Number, point: Number, _id: false },
            i53: { selected: Number, point: Number, _id: false },
            i54: { selected: Number, point: Number, _id: false },
            i55: { selected: Number, point: Number, _id: false },
            i56: { selected: Number, point: Number, _id: false },
            i57: { selected: Number, point: Number, _id: false },
            i58: { selected: Number, point: Number, _id: false },
            i59: { selected: Number, point: Number, _id: false },
            i60: { selected: Number, point: Number, _id: false },
         }
      }
   }
}, {
   timestamps: true
})

const Assessment = mongoose.models.Assessment || mongoose.model('Assessment', assessmentSchema)

export default Assessment