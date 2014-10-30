$(document).ready(function() {
    $('#registrationForm').bootstrapValidator({

        fields: {
            companyName: {
                message: 'The Company name is not valid',
                validators: {
                    notEmpty: {
                        message: 'The Company name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 3,
                        max: 20,
                        message: 'The Company name must be more than 6 and less than 20 characters long'
                    }
                }
            },
            sp_businessId: {
                validators: {
                    notEmpty: {
                        message: 'The Business Id is required and cannot be empty'
                    },  
                    stringLength: {
                        max: 9,
                        message: 'The Company name must be more than 6 and less than 20 characters long'
                    },   
                    regexp: {
                        regexp: /([0-9]){7}[-]([0-9]){1}/,
                        message: 'The Business Id can only consist of numbers'
                    }
                }
            },
            SpZipCode: {
                validators: {
                    notEmpty: {
                        message: 'The Zip code is required and cannot be empty'
                    },
                    // different: {
                    //     field: 'username',
                    //     message: 'The password cannot be the same as username'
                    // },
                    stringLength: {
                        min: 5,
                        message: 'Please enter 5 numbers'
                    },   
                    regexp: {
                        regexp: /^([_0-9]){1,}$/,
                        message: 'The Zip code can only consist of numbers'
                    }
                }
            },
            countryChoose: {
                validators: {
                    notEmpty: {
                        message: 'The country is required'
                    }
                }
            },
            SpCity: {
                validators: {
                    notEmpty: {
                        message: 'The City is required'
                    }
                }
            },
            streetAddress: {
            	validators: {
            		notEmpty: {
            			message: 'The Street address is required'
            		},
            		stringLength: {
                        max: 30,
                        message: 'Keep it less than 30 characters'
                    }   
            	}
            },
             SpEmail: {
            	validators: {
            		notEmpty: {
            			message: 'The Email address is required'
            		},
            		emailAddress: {
                        message: 'The Email address is not valid'
                    } 
            	}
            },
            phoneNumber: {
                validators: {
                    notEmpty: {
                        message: 'The Phone number is required and cannot be empty'
                    },
                    // different: {
                    //     field: 'username',
                    //     message: 'The password cannot be the same as username'
                    // },
                    stringLength: {
                        max: 13,
                        message: 'Please do not exceed 13 numbers'
                    },   
                    regexp: {
                        regexp: /(|[+])\d[(0-9)]{9,14}/,
                        message: 'The Phone number is not valid'
                    }
                }
            },
            passwordSp: {
            	validators: {
            		notEmpty: {
            			message: 'The Password is required'
            		},
            		stringLength: {
                        min: 6,
                        message: 'Minimum of 6 characters'
                    }
            	}
            },
            confirmPasswordSp: {
            	validators: {
            		 identical: {
                        field: 'passwordSp',
                        message: 'The password and its confirm are not the same'
                    }
            	}
            },
            SpLocation: {
            	validators: {
            		notEmpty: {
            			message: 'Add your location'
            		}
            	}
            },
            bookndoTerms: {
            	validators: {
            		notEmpty: {
            			message: 'Agree to the terms to continue'
            		}
            	}
            }
        }
    });

$('#form13').bootstrapValidator({

        fields: {
            numberSlots: {
                validators: {
                    notEmpty: {
                        message: 'This cannot be empty'
                    },
                    between: {
                        min: 1,
                        max: 999,
                        message: 'The number of slots must be between 1 and 999'
                    }
                }
            }
        }
    });
});



