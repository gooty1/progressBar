//Not using IIFE for future webpack / requireJS syntax refactoring
function progressBar() {
    'use strict';

    function progressBarController($interval) {

        this.start = function() {
            var interval = 10;
            var count = this.config.duration / interval;
            var index = Number(this.config.start);
            var range = Number(this.config.finish) - Number(this.config.start);

            this.$interval = $interval;
            this.intervalPromise = $interval(function() {
                index++;
                this.percentage = (index * range / count + this.config.start).toFixed(2) + '%';
                this.progressStyle = {
                    width: this.percentage
                };

                if(index === count) {
                    this.done();
                }
            }.bind(this), interval, count);
        };

        this.done = function() {
            this.isProgressBarFinished = true;
            this.clearInterval();
        };

        this.$onDestroy = function() {
            this.clearInterval();
        };

        this.clearInterval= function() {
            if (!this.intervalPromise) {
                return;
            }
            this.$interval.cancel(this.intervalPromise);
        };

        this.close = function() {
            this.isProgressBarFinished = false;
            this.config = null;
        };

        this.$onChanges = function(changes) {
            if (changes.config.currentValue) {
                this.start();
            }
        };
    }

    return {
        templateUrl: 'app/progressBar/progressBar.html',
        controller: progressBarController,
        controllerAs: 'vm',
        bindings: {
            config:'<'
        }
    };
}