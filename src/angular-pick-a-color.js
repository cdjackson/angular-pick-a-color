/**
 * pick-a-color directive for AngularJS
 * Written by Chris Jackson
 * MIT License
 *
 * See https://github.com/lauren/pick-a-color for the excellent color picker
 */
angular.module('pickAColor', [])
    .directive('pickAColor', function ($parse) {
        return {
            scope: {
                value: "="
            },
            restrict: 'E',
            compile: function (element, attrs) {
                var modelAccessor = $parse(attrs.ngModel);

                // Compile the HTML template
                var html = "<input type='text' id='" + attrs.id + "'" +
                    "name='" + attrs.name + "'" +
                    "value='" + attrs.value + "'" +
                    "' class='pick-a-color form-control'>" +
                    "</input>";

                var newElem = $(html);
                element.replaceWith(newElem);

                return function (scope, element, attrs, controller) {
                    // Process options
                    var options = {};
                    if (attrs.inlineDropdown != null) {
                        options.inlineDropdown = attrs.inlineDropdown;
                    }
                    if (attrs.showSpectrum != null) {
                        options.showSpectrum = attrs.showSpectrum;
                    }
                    if (attrs.showSavedColors != null) {
                        options.showSavedColors = attrs.showSavedColors;
                    }
                    if (attrs.saveColorsPerElement != null) {
                        options.saveColorsPerElement = attrs.saveColorsPerElement;
                    }
                    if (attrs.fadeMenuToggle != null) {
                        options.fadeMenuToggle = attrs.fadeMenuToggle;
                    }
                    if (attrs.showAdvanced != null) {
                        options.showAdvanced = attrs.showAdvanced;
                    }
                    if (attrs.showBasicColors != null) {
                        options.showBasicColors = attrs.showBasicColors;
                    }
                    if (attrs.showHexInput != null) {
                        options.showHexInput = attrs.showHexInput;
                    }
                    if (attrs.allowBlank != null) {
                        options.allowBlank = attrs.allowBlank;
                    }

                    // Create the 'pick-a-color control
                    element.pickAColor(
                        options
                    );

                    // Handle changes to the value
                    element.on("change", function () {
                        console.log($(this).val());

                        var value = $(this).val();
                        scope.$apply(function (scope) {
                            // Change bound variable
                            modelAccessor.assign(scope.value, value);
                        });
                    });
                };
            }
        };
    });
