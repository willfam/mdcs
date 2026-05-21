import './polyfills.server.mjs';
import{h as st}from"./chunk-7C656YAM.mjs";import{Ab as Q,I as Vt,J as jt,M as rt,P as Ht,R as Gt,Ta as Zt,Ua as Jt,Xa as Xt,Z as zt,_ as Ut,a as v,ha as Kt,l as g,la as Qt,na as Wt,oa as ct,qa as $t,zb as K}from"./chunk-UXIHSF5Z.mjs";import{D as q,U as Lt,V as Nt,aa as qt,i as Mt,l as Rt,n as Ot}from"./chunk-4BSJVIAA.mjs";import{$b as tt,Ac as x,C as Z,Cb as Y,Cc as z,Dc as Bt,G as m,Ga as X,Ia as j,Ja as yt,Kc as nt,Pb as T,Qc as p,Rb as F,Rc as y,Sb as Dt,Sc as U,Tb as w,Ub as St,W as V,Wb as It,X as ht,Xb as Tt,Y as E,Zb as s,_b as f,ac as Ft,bc as wt,bd as Pt,da as I,e as L,ea as mt,f as _,ga as C,gc as At,ha as u,hc as xt,ia as r,ib as D,kc as A,kd as at,mc as c,n as N,nc as it,oa as ut,oc as P,pa as ft,pc as et,qc as kt,qd as S,rb as bt,rc as d,rd as ot,s as $,sa as vt,sc as l,ta as gt,wa as J,xa as _t,xb as B,yb as Ct,yc as G,zb as H,zc as Et}from"./chunk-UDKZT7I2.mjs";import{a as h,b as O}from"./chunk-S6KH3LOX.mjs";var Yt=(()=>{class n{constructor(){this.selectedFilters=new _({}),this.selectedFilters$=this.selectedFilters.asObservable(),this.filterConfigsSubject=new _([]),this.filterConfigs$=this.filterConfigsSubject.asObservable(),this.formGroupSubject=new _(null),this.searchValueSubject=new _(""),this.searchValue$=this.searchValueSubject.asObservable(),this.filterValuesSubject=new _({}),this.filterValues$=this.filterValuesSubject.asObservable()}updateFilterValues(t){let i=this.filterValuesSubject.getValue(),e=h(h({},i),t);Object.keys(t).forEach(a=>{(!t[a]||t[a].length===0)&&delete e[a]}),this.filterValuesSubject.next(e)}updateSearchValue(t){this.searchValueSubject.next(t)}get formGroup$(){return this.formGroupSubject.asObservable()}getSelectedFilters(){return this.selectedFilters.getValue()}updateFormGroup(t){this.formGroupSubject.next(t)}updateSelectedFilters(t){this.selectedFilters.next(t)}updateFilterConfigs(t){this.filterConfigsSubject.next(t)}removeFilter(t,i){this.selectedFilters.next(i);let e=h({},this.filterValuesSubject.getValue());delete e[t],this.filterValuesSubject.next(e);let a=this.formGroupSubject.getValue();if(a){let o=a.get(t);o&&o.reset()}}clearSelectedFilters(){let t=h({},this.getSelectedFilters());Object.keys(this.getSelectedFilters()).forEach(i=>{t[i]="",this.removeFilter(i,t)}),this.filterValuesSubject.next({})}updateDateRangeFilter(t,i){let e=i.startDate?i.startDate.toISOString():"",a=i.endDate?i.endDate.toISOString():"",o={[t]:[e,a].filter(R=>R)};this.updateFilterValues(o);let k=this.getSelectedFilters();this.updateSelectedFilters(O(h({},k),{[t]:{startDate:i.startDate,endDate:i.endDate}}))}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var mi=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],ui=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function fi(n,b){n&1&&(s(0,"span",3),P(1,1),f())}function vi(n,b){n&1&&(s(0,"span",6),P(1,2),f())}var gi=["*"];var _i=new C("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),ti=new C("MatChipAvatar"),ii=new C("MatChipTrailingIcon"),ei=new C("MatChipEdit"),dt=new C("MatChipRemove"),ni=new C("MatChip"),ai=(()=>{class n{_elementRef=r(j);_parentChip=r(ni);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){r(rt).load(ct),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=H({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,e){i&2&&(T("disabled",e._getDisabledAttribute())("aria-disabled",e.disabled),G("mdc-evolution-chip__action--primary",e._isPrimary)("mdc-evolution-chip__action--secondary",!e._isPrimary)("mdc-evolution-chip__action--trailing",!e._isPrimary&&!e._isLeading))},inputs:{disabled:[2,"disabled","disabled",S],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?-1:ot(t)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),oi=(()=>{class n extends ai{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let t;return function(e){return(t||(t=X(n)))(e||n)}})();static \u0275dir=H({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,e){i&1&&A("click",function(o){return e._handleClick(o)})("keydown",function(o){return e._handleKeydown(o)}),i&2&&(T("tabindex",e._getTabindex()),G("mdc-evolution-chip__action--presentational",!1))},features:[Y]})}return n})();var ri=(()=>{class n extends oi{_isPrimary=!1;_handleClick(t){this.disabled||(t.stopPropagation(),t.preventDefault(),this._parentChip.remove())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&(t.stopPropagation(),t.preventDefault(),this._parentChip.remove())}static \u0275fac=(()=>{let t;return function(e){return(t||(t=X(n)))(e||n)}})();static \u0275dir=H({type:n,selectors:[["","matChipRemove",""]],hostAttrs:["role","button",1,"mat-mdc-chip-remove","mat-mdc-chip-trailing-icon","mat-focus-indicator","mdc-evolution-chip__icon","mdc-evolution-chip__icon--trailing"],hostVars:1,hostBindings:function(i,e){i&2&&T("aria-hidden",null)},features:[nt([{provide:dt,useExisting:n}]),Y]})}return n})(),pt=(()=>{class n{_changeDetectorRef=r(at);_elementRef=r(j);_tagName=r(Pt);_ngZone=r(_t);_focusMonitor=r(Ht);_globalRippleOptions=r(Qt,{optional:!0});_document=r(gt);_onFocus=new L;_onBlur=new L;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=qt();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=r(Ut).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new J;destroyed=new J;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=r(Wt);_injector=r(vt);constructor(){let t=r(rt);t.load(ct),t.load(Gt),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Z(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(i=>{let e=i._elementRef.nativeElement;return e===t||e.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let i=t!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=B({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(i,e,a){if(i&1&&et(a,ti,5)(a,ei,5)(a,ii,5)(a,dt,5)(a,ti,5)(a,ii,5)(a,ei,5)(a,dt,5),i&2){let o;d(o=l())&&(e.leadingIcon=o.first),d(o=l())&&(e.editIcon=o.first),d(o=l())&&(e.trailingIcon=o.first),d(o=l())&&(e.removeIcon=o.first),d(o=l())&&(e._allLeadingIcons=o),d(o=l())&&(e._allTrailingIcons=o),d(o=l())&&(e._allEditIcons=o),d(o=l())&&(e._allRemoveIcons=o)}},viewQuery:function(i,e){if(i&1&&kt(oi,5),i&2){let a;d(a=l())&&(e.primaryAction=a.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(i,e){i&1&&A("keydown",function(o){return e._handleKeydown(o)}),i&2&&(xt("id",e.id),T("role",e.role)("aria-label",e.ariaLabel),Et("mat-"+(e.color||"primary")),G("mdc-evolution-chip",!e._isBasicChip)("mdc-evolution-chip--disabled",e.disabled)("mdc-evolution-chip--with-trailing-action",e._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",e.leadingIcon)("mdc-evolution-chip--with-primary-icon",e.leadingIcon)("mdc-evolution-chip--with-avatar",e.leadingIcon)("mat-mdc-chip-with-avatar",e.leadingIcon)("mat-mdc-chip-highlighted",e.highlighted)("mat-mdc-chip-disabled",e.disabled)("mat-mdc-basic-chip",e._isBasicChip)("mat-mdc-standard-chip",!e._isBasicChip)("mat-mdc-chip-with-trailing-icon",e._hasTrailingIcon())("_mat-animation-noopable",e._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",S],highlighted:[2,"highlighted","highlighted",S],disableRipple:[2,"disableRipple","disableRipple",S],disabled:[2,"disabled","disabled",S]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[nt([{provide:ni,useExisting:n}])],ngContentSelectors:ui,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(i,e){i&1&&(it(mi),tt(0,"span",0),s(1,"span",1)(2,"span",2),F(3,fi,2,0,"span",3),s(4,"span",4),P(5),tt(6,"span",5),f()()(),F(7,vi,2,0,"span",6)),i&2&&(D(3),w(e.leadingIcon?3:-1),D(4),w(e._hasTrailingIcon()?7:-1))},dependencies:[ai],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var ci=(()=>{class n{_elementRef=r(j);_changeDetectorRef=r(at);_dir=r(Lt,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new L;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(t=>t._onFocus)}get chipDestroyedChanges(){return this._getChipStream(t=>t.destroyed)}get chipRemovedChanges(){return this._getChipStream(t=>t.removed)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(t){this._explicitRole=t}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new yt;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(t=>t._hasFocus())}_syncChipsState(){this._chips?.forEach(t=>{t._chipListDisabled=this._disabled,t._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(t){this._originatesFromChip(t)&&this._keyManager.onKeydown(t)}_isValidIndex(t){return t>=0&&t<this._chips.length}_allowFocusEscape(){let t=this._elementRef.nativeElement.tabIndex;t!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=t))}_getChipStream(t){return this._chips.changes.pipe(V(null),ht(()=>Z(...this._chips.map(t))))}_originatesFromChip(t){let i=t.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains("mat-mdc-chip"))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(V(this._chips)).subscribe(t=>{let i=[];t.forEach(e=>e._getActions().forEach(a=>i.push(a))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new zt(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(t=>this._skipPredicate(t)),this.chipFocusChanges.pipe(E(this._destroyed)).subscribe(({chip:t})=>{let i=t._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(E(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t))}_skipPredicate(t){return t.disabled}_trackChipSetChanges(){this._chips.changes.pipe(V(null),E(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(E(this._destroyed)).subscribe(t=>{let e=this._chips.toArray().indexOf(t.chip),a=t.chip._hasFocus(),o=t.chip._hadFocusOnRemove&&this._keyManager.activeItem&&t.chip._getActions().includes(this._keyManager.activeItem),k=a||o;this._isValidIndex(e)&&k&&(this._lastDestroyedFocusedChipIndex=e)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let t=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[t];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=B({type:n,selectors:[["mat-chip-set"]],contentQueries:function(i,e,a){if(i&1&&et(a,pt,5),i&2){let o;d(o=l())&&(e._chips=o)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(i,e){i&1&&A("keydown",function(o){return e._handleKeydown(o)}),i&2&&T("role",e.role)},inputs:{disabled:[2,"disabled","disabled",S],role:"role",tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:ot(t)]},ngContentSelectors:gi,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,e){i&1&&(it(),Ft(0,"div",0),P(1),wt())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var si=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ct({type:n});static \u0275inj=mt({providers:[Kt,{provide:_i,useValue:{separatorKeyCodes:[13]}}],imports:[$t,Nt]})}return n})();var di={HD:"Hougang Depot",AMKD:"Ang Mo Kio Depot",ARDD:"Aver Raja Depot Depot",depot:"Depot",depots:"Depots",depotsSec:"Depots",effectiveDate:"Effective Date",effectiveDateLive:"Effective Date (DAGW Live)",effectiveDateTrial:"Effective Date (DAGW Trial)",eventDateTime:"Event Date Time",consistency:"Consistency",active:"Active Parameter",mdcsAccess:"MDCS Access",type:"Type",trialGroup:"Application Trial Group",busServiceGroup:"Bus Service Group",fareParameterGroup:" Fare Parameter Group",userId:"User ID",dateRange:"Date",date:"Date",param_type:"Type",connection:"Connection Status",download:"Parameter Download Status",upload:"Transaction Upload Status",auth:"SAM Auth Status",currDepot:"Current Depot",currOperator:"Current Operator",futureOperator:"Future Operator",dayType:"Day Type",serviceNo:"Service No.",busId:"Bus ID",status:"Status",reportType:"Report Type",businessDate:"Business Date",monthType:"Month Type",serviceProvider:"Service Provider Name",startDate:"Start Date",endDate:"End Date",spName:"SP Name",currDate:"Current Business Day",eodExecuted:"Last EOD Executed",updateType:"Update Type",iMaxUsers:"Number of User Access entries",aobjBusFleet:"Bus Fleet",aobjUserAccess:"User Access",UAD:"Access Display",aobjBCVSpecificConfig:"BCV Configuration",iNumOfEntries:"Number of Entries",iSystemOwnerID:"System Owner ID",iStartOfOprDay:"Start of Operation Day",iCSCRejectTimeout:"Same CSC Reject Timeout (milliseconds)",iCardDetectTimeout:"Card Detection Timeout",iInServiceRevenueARUploadInterval:"In-Service Revenue Audit Register Periodic snapshot interval (minutes)",iNonRevenueARUploadInterval:"Non-Revenue(Out of Service) Audit Register Periodic snapshot interval (minutes)",iReadFailureControlNumberOfFailures:"CSC Read Failure Control - Number of Failures",iReadFailureControlSampleSize:"CSC Read Failure Control - Sample Size",iWriteFailureControlNumberOfFailures:"CSC Write Failure Control - Number of Failures",iWriteFailureControlSampleSize:"CSC Write Failure Control - Sample Size",iAntiPassbackTimeout:"Anti - Passback timeout (seconds)",iPatronMsgTimeout:"Patron message timeout (milliseconds)",iSwitchOutOfService:"Switch to Out Of Service",iTimeDrift:"Clock Drift Error Limit (minutes)",iCancelTime:"Cancel Time (minutes)",iBreakdownTransferTime:"Breakdown Transfer Time (minutes)",iEntryProcessTimeout:"Entry Processing Timeout (seconds)",iMsgFlushInactivityTimer:"Message Flush Inactivity Timer (seconds)",iBFCHeartbeatInterval:"BFC Heartbeat interval",iBLSHeartbeatInterval:"BLS Heartbeat interval",iEnquiryReadCount:"Enquiry Read Count",iEnquiryDisplayCount:"Enquiry Display Count",iPrematureEndOfTripFreeRide:"Premature End of Trip free ride",iSpecialModeInactivityTimeout:"Special Mode Inactivity Timeout (seconds)",iAutoAmbientLightAdjustment:"Auto Ambient Light Adjustment",iEntryMismatchExitOption:"Entry Mismatch at Exit Option",iMaxPenaltyAmt:"Maximum Penalty Amount",iMinPenaltyAmt:"Minimum Penalty Amount",iProcessIncompleteCSCWriteTimeout:"Process Incomplete CSC Write Timeout (seconds)",iMemoryProfileParameterFullLimit:"Memory Profile - Parameter Full Limit",iMemoryProfileMessageFullLimit:"Memory Profile - Transaction Full Limit",aobjBFCSpecificConfig:"BFC Configuration",BID:"BID",SOID:"System Owner ID",SOD:"Start of Operation Day",PFL:"Memory Profile - Parameter Full Limit",MFL:"Memory Profile - Message Full Limit",DKBDB:"Default Kbd Backlight",DAS:"Default AirCon Status",POT:"Power Off Time",SITL:"Short Inactivity Time Limit",LITL:"Long Inactivity Time Limit",MDT:"Message Display Time",QLB:"Qty LED Blinks",LEDBT:"LED Blink Time",CDEL:"Clock Drift Error Limit (minutes)",OBDCT:"On Bus Device Connection Time",OffDCT:"Off Bus Device Connection Time",FMSHT:"FMS Heartbeat Time",FMSMRET:"FMS Message Reply Error Timeout",BCVHT:"BCV Heartbeat Time",BCVMRET:"BCV Message Reply Error Timeout",BCV1M:"BCV 1 Mode",BCV2M:"BCV 2 Mode",BCV3M:"BCV 3 Mode",BCV4M:"BCV 4 Mode",BCV5M:"BCV 5 Mode",BCV6M:"BCV 6 Mode",QHT:"QTA Heartbeat Time",QMRET:"QTA Message Reply Error Timeout",BLSAAE:"BLS Auto Activate Enabled",BLSLCE:"BLS Location Correction Enabled",BLSCE:"BLS Control Enabled",CRPCRE:"CRP Cash Recording Enabled",CRPCT:"CRP Cancel Timeout",PINRS:"PIN Required Supervisor",PINRM:"PIN Required Maintainer",PINRD:"PIN Required Driver",PINRMCSC:"PIN Required Master CSC",PINEL:"PIN Entry Limit",PINLT:"PIN Lockout Time",SM:"Supervisor Modes",MM:"Maintainer Modes",IM:"Inspector Modes",DM:"Driver Modes",MCSCM:"Master CSC Modes",DOUE:"Driver Odometer Update Enabled",DSSE:"Driver Service Select Enabled",OTARUI:"On-Trip Audit Register Periodic Upload interval (minutes)",OffTARUI:"Off-Trip Audit Register Periodic Upload Interval",CLEDOT:"Concession Icon On Time",IOE:"Interchange Ops Enabled",NOfSBT:"Show X Bad Transactions",CRE:"Card Retention Enabled",AETE:"Auto End Trip Enabled",SURT:"Stop Update Remind Timeout",CPMT:"Check Point Mode Timeout",AAA:"Auto Ambient Light Adjustment",C1KT:"Concession 1 Key Concession Type",C2KT:"Concession 2 Key Concession Type",C3KT:"Concession 3 Key Concession Type",C4KT:"Concession 4 Key Concession Type",C5KT:"Concession 5 Key Concession Type",T1KV:"Top-up 1 Key Value",T2KV:"Top-up 2 Key Value",T3KV:"Top-up 3 Key Value",T4KV:"Top-up 4 Key Value",T5KV:"Top-up 5 Key Value",PEPT:"Premature Exit Processing Type",CTE:"Complimentary Tickets Enabled",DSLE:"Device Secure Load Enabled",AUFS:"Application Upgrade File Size",DTSIT:"DTS Inactivity Timeout",SIDF:"Security ID Flag",aBDR:"BDR",BRC:"Blacklist Reason",BSCID:"BSC ID",BR:"BR",aobjBLS1SpecificConfig:"BLS1 Configuration",iRevisionID:"Revision ID",iCommTimeout:"Communications timeout value",iODOInFrontErrLimit:"Odo in front error limit",iODOTowardsErrLimit:"Odo towards error limit",iLocationFlags:"Location flags",iGPSErrorTimeout:"GPS error timeout",iGPSTimeDiffToUTC:"GPS time difference to UTC",iHDOPLimit:"Hdop limit",iCosinePHI:"Cosine phi",iGPSFlags:"GPS flags",iExpectedErrorOfGPS:"Expected Error of GPS",iAgeOfDGPSData:"Age of DGPS data",iSlowSpeedTripPt:"Slow Speed trip at",iSlowSpeedHystValue:"Slow Speed hyst val",iLocReportCycDistance:"Location report cyc distance",iLocReportCycTime:"Location report cyc time",iODOMeterFaultLimit:"Odometer fault limit",iGYROMeterFaultLimit:"Gyrometer fault limit",iHeartBeatTime:"Heartbeat time",iRadiusOfCertainity:"Radius of certainty",iProximityDistance:"Proximity distance",iSpeedReportingTime:"Speed Reporting Time",iSpeedChangeTheshold:"Speed Change Threshold",iMarkerOvershootTheshold:"Marker Overshoot Threshold",iOffRouteAlarmReportTime:"Off-route Alarm Report Time",iTemperatureTheshold:"Temperature Threshold",iVoltageTheshold:"Voltage Threshold",iCurrentTheshold:"Current Threshold",iOffRouteDistTheshold:"Off-route Distance Threshold",aobjPDTDetails:"Parameter Description Table",iNumFiles:"Number of Files",strParameterMsgType:"Message Type",iServiceProviderID:"Service Provider ID",iDepotID:"Depot ID",iFileID:"File ID",iVersion:"Parameter Version",strFileName:"Parameter Name",strPath:"Parameter Path",aobjCardBlacklistRange:"Card Blacklist Range",aobjBSD:"Bank Card Schemes",aobjWED:"Bank Card Whitelist",NBSD:"Number of Bank Schemes entries",NED:"Number of Whitelist entries",HVER:"Hashed PAN Key Version",AID:"Bank Scheme AID",WCHK:"Whitelist Check",ESTDT:"Eff. Start Date",EEDDT:"Eff. End Date",HPN:"PAN Hash",strTFBPD:"Target Full Blacklist Ref. Date",TFBPVer:"Target Full Blacklist Parameter Version",strRFBPD:"Reference Full Blacklist Ref. Date",RFBPVer:"Reference Full Blacklist Version",iFullBlacklistParamVersion:"Full BL Ver",strRefDate:"Ref. Date",iNoOfAddedBlacklistEntries:"Blacklist Entries Added",aobjAddedBlackList:"Blacklist To Add",iNoOfRemovedBlacklistEntries:"Blacklist Entries Removed",aobjRemovedBlackList:"Blacklist To Remove",NEC:"Number of Card Entries",NER:"Number of Card Range Entries",aobjBLS2SpecificConfig:"BLS2 Specific Configuration",RID:"Revision ID",BODOMCF:"Base ODO Meter Con Factor",HODOMCF:"High ODO Meter Con Factor",LODOMCF:"Low ODO Meter Con Factor",GPSRP:"GPS Receiver Position",NOfD:"Number Of Doors",OnFT:"On Filter Time",OffFT:"Off Filter Time",DOS:"Door Open Signal",AODOMCL:"Actual ODO Meter Con Limit",RSP:"Reverse Signal Polarity",iMaxBlacklistActionDefinition:"Max Blacklist Action Definition",aobjBlacklistAction:"Bus Blacklist",strBitCardBadDebtRefAction:"Bad Debt Reference",strBitCardBlockAction:"Disable Purse",strBitCardRejectAction:"Reject Card",strBbitCardDisableAutoloadAction:"Disable AutoLoad",strBitCardRetainAction:"Retain Card",strBitCardReplaceAction:"Replace Card",strBitCardRefundImmediateAction:"Refund Card Immediately",strBitCardDeferRefundAction:"Deferred Refund Card",strBitCardCollectPenaltyAction:"Collect Penalty",strBitCardRefuseAutoloadAction:"Refuse AutoLoad",strBitCardBadDebtSettleAction:"Settle Bad Debt Allowed",strBitCardRFU:"RFU",aobjBusCashFare:"Bus Cash Fare",iBusCashFareDef:" Bus Cash Fare Def",iServiceCategory:"Service Category",iAdultIDFCButton1FareAmount:"Adult IDFC Btn No.1 Fare",iAdultIDFCButton2FareAmount:"Adult IDFC Btn No.2 Fare",iAdultIDFCButton3FareAmount:"Adult IDFC Btn No.3 Fare",iAdultIDFCButton4FareAmount:"Adult IDFC Btn No.4 Fare",iAdultIDFCButton5FareAmount:"Adult IDFC Btn No.5 Fare",iAdultIDFCButton6FareAmount:"Adult IDFC Btn No.6 Fare",iAdultIDFCButton7FareAmount:"Adult IDFC Btn No.7 Fare",iAdultIDFCButton8FareAmount:"Adult IDFC Btn No.8 Fare",iChildIDFCButton1FareAmount:"Child IDFC Btn No.1 Fare",iChildIDFCButton2FareAmount:"Child IDFC Btn No.3 Fare",iChildIDFCButton3FareAmount:"Child IDFC Btn No.3 Fare",iSeniorCitizenIDFCButton1FareAmount:"Senior IDFC Btn No.1 Fare",iSeniorCitizenIDFCButton2FareAmount:"Senior IDFC Btn No.2 Fare",iSeniorCitizenIDFCButton3FareAmount:"Senior IDFC Btn No.3 Fare",NEDE:"Number of Entry",NExDE:"Number of Exit",aobjBEDisc:"Bus Entry Discount",DiscID:"Discount Set ID",LSC:"Last Service Category",CSC:"Current Service Category",PC1DA:"Patron Cat 1 Discount Amt",PC2DA:"Patron Cat 2 Discount Amt",PC3DA:"Patron Cat 3 Discount Amt",PC4DA:"Patron Cat 4 Discount Amt",PC5DA:"Patron Cat 5 Discount Amt",PC6DA:"Patron Cat 6 Discount Amt",PC7DA:"Patron Cat 7 Discount Amt",PC8DA:"Patron Cat 8 Discount Amt",PC9DA:"Patron Cat 9 Discount Amt",PC10DA:"Patron Cat 10 Discount Amt",PC11DA:"Patron Cat 11 Discount Amt",PC12DA:"Patron Cat 12 Discount Amt",PC13DA:"Patron Cat 13 Discount Amt",PC14DA:"Patron Cat 14 Discount Amt",PC15DA:"Patron Cat 15 Discount Amt",aobjBExDisc:"Bus Exit Discount",SC:"Service Category",SS:"Start Stage",ES:"End Stage",aobjBusFareBandToCashFareMap:"Cash Fare Band",iFareBandID:"Fare Band ID",iAdultFareButtonID:"Adult Cash Fare Band Code",iChildCashFareBandCode:"Child/Student Cash Fare Band Code",iSeniorCitzCashFareBandCode:"Senior Citizen Cash Fare Band Code",aobjTransitUsageGenParam:"Transit Usage General",iParamSwitchOverDate:"Switch Over Date",iMaxNumberOfTransfers:"Max Number of Transfers",iMaxJourneyTime:"Max Journey Time",iMaxTransferTimeExitPerformed:"Max Transfer Time if Exit Performed",iMaxTransferTimeExitNotPerformed:"Max Transfer Time if Exit Not Performed",iMaxTimeInRailSystem:"Max Time in Rail System",iDistanceChargedSameEntryExit:"Distance Chargeable for Same Bus Stop of Entry-Exit",iMaxTransferTimeRailtoRail:"Max Transfer Time for Rail to Rail Transfer",iMaxTransferTimeIntraTownBus:"Max Transfer Time for Intra-Town Feeder Bus Service Transfer",aobjTicketCategoryMap:"Ticket Category Map",iDefaultTicketCategory:"Default Ticket Category",iFareCapPeriodType:"Fare Cap Period Type",strBusFareCapAmt:"Bus Fare Cap Amount",strRailFareCapAmt:"Rail Fare Cap Amount",strBusAndRailFareCapAmt:"Bus & Rail Fare Cap Amount",strOffPeakBusAndRailFareCapAmt:"Off Peak Fare Cap Amount",strZeroFareServiceProvider:"Zero Fare Service Provider",aobjPatronCatMap:"Patron Category Map",aobjWeekdayTimeTable:"Weekday Timetable",aobjSaturdayTimeTable:"Saturday Timetable",aobjSundayOrPHTimeTable:"Sunday or Public Holiday Timetable",iOffPeakPassTimingIndicator:"Off Peak Pass Time Indicator",iStartOfTimePeriod:"Start Time Period",iEndOfTimePeriod:"End Time Period",iTC1:"TC 1",iTC2:"TC 2",iTC3:"TC 3",iTC4:"TC 4",iTC5:"TC 5",iTC6:"TC 6",iTC7:"TC 7",iTC8:"TC 8",iTC9:"TC 9",iTC10:"TC 10",iTC11:"TC 11",iTC12:"TC 12",iTC13:"TC 13",iTC14:"TC 14",iTC15:"TC 15",aobjBusPremiumServiceFare:"Bus Premium Service Fare",iPremiumServiceFareDef:"Premium Service Fare Def",iPatronCategory1FareAmount:"Patron Cat 1 Fare",iPatronCategory2FareAmount:"Patron Cat 2 Fare",iPatronCategory3FareAmount:"Patron Cat 3 Fare",iPatronCategory4FareAmount:"Patron Cat 4 Fare",iPatronCategory5FareAmount:"Patron Cat 5 Fare",iPatronCategory6FareAmount:"Patron Cat 6 Fare",iPatronCategory7FareAmount:"Patron Cat 7 Fare",iPatronCategory8FareAmount:"Patron Cat 8 Fare",iPatronCategory9FareAmount:"Patron Cat 9 Fare",iPatronCategory10FareAmount:"Patron Cat 10 Fare",iPatronCategory11FareAmount:"Patron Cat 11 Fare",iPatronCategory12FareAmount:"Patron Cat 12 Fare",iPatronCategory13FareAmount:"Patron Cat 13 Fare",iPatronCategory14FareAmount:"Patron Cat 14 Fare",iPatronCategory15FareAmount:"Patron Cat 15 Fare",NBG:"Number of Bus Group",BG:"Bus Group",SID:"User/Staff ID",iNumberOfBusListRecords:"Number of Bus List entries",aobjBusListDetails:"Bus List Details",strBusNumber:"Bus Number",strDepotID:"Depot ID",strBusParkID:"Bus Park ID",strAssignedSvcNumber:"Assigned Service Number",strExpectedTimeOfReturn:"Expected Time Of Return",iExpectedNumberOfCatridges:"Expected Number Of Catridges",aobjDCSConfig:"DCS Configurations",BackupDuration:"Backup Duration",NE:"Number of Entries",BRN:"Bus Register No",BGID:"Bus Group ID",BTID:"Bus Type ID",aobjBusStop:"Bus Stop",BSID:"Bus Stop ID",BSD:"Bus Stop Description",aobjCashKeyAssignment:"Cash Key Assignment",strServiceCategoryName:"Service Category",iCashFareButtonSet:"Cash Fare Btn Set",aobjVLSMarker:"VLS Marker",iMarkerID:"Marker ID",iStopRadius:"Bus Stop Radius Val",iLatitude:"Latitude Val",iLongitude:"Longitude Val",aobjIPDSpecificConfig:"IPD Configurations",iARUploadInterval:"Audit Register Periodic Snapshot Interval (minutes)",iDefaultBacklight:"Default LCD Backlight",iPINEntries:"PIN retries",iDataFileRetentionPeriod:"Data File Retention Period",iPenaltyFixedAmt:"Fixed Penalty Indicator",iPenalty:"Fixed Penalty Amount ($)",NMBLR:"Number of Master Bus List Records",aobjMBLD:"Master Bus List",BN:"Bus Number",SPID:"Service Provider ID",EDT:"Effective Date Time",DBM:"Depot Bit Map",iNoOfTrialBusListRecords:"Number of Trial Device List",aobjTrialBusListDetails:"Trial Device List",iGroupBitMap:"Group Bit Map",SP:"Service Provider",LTAUser:"LTA User",ALS:"Account Locked",PED:"Password Expiry Date",NICEDef:"Number of Individual Card Entries",NICREDef:"Number of Individual Card Entries",aobjBU:"",aobjICE:"Individual Card Entry",CAN:"Card Application Number",BDC:"Bad Debt Counter",aobjICRE:"Card Range Entry",CANS:"Card Application Number - Start",CANE:"Card Application Number - End",iNoOfAddedEntriesDef:"Number of Added entries",iNoOfRemovedEntriesDef:"Number of Removed entries",iHashPanKeyVersion:"Hashed PAN Key Version",iFullBlocklistParamVersion:"Full Blocklist Version",aobjBlocklistAddedEntryDef:"Blocklist Added Entry",strHashPan:"PAN Hash",strBlockListReason:"Blocklist Reason",aobjBlocklistRemovedEntryDef:"Blocklist Removed Entry",iNoOfEntries:"Number of Entries",aobjBankCardFullBlocklistDetails:"Bank Card Full Blocklist",usiNumCardManager:"Number Card Manager",aobjCardManager:"Card Manager",iNumIssuerIDsDefined:"Number Issuer IDs Defined",aobjIssuerID:"Issuer ID",strIssuerID:"Issuer ID",aobjPublicHoliday:"Public Holiday",strDate:"Public Holiday Date",aobjGeneralSystemDefParam:"System General",iStandardTktLifeValidPerdiod:"Standard Ticket Life Validity Period (days)",iOffsetTimeForPeakStartTime:"Offset Time for Peak Start Time (minutes)",iOffsetTimeForPeakEndTime:"Offset Time for Peak End Time (minutes)",iABTAntiPassbackTime:"ABT Anti Passback Time (minutes)",iCBTAACardUsageRejectionStartDate:"CBT AA Card Usage Rejection Start Date (days)",aobjTransitCardTypes:"Transit Card Types",iTransitCardTypeCode:"Transit Card Type Code",iTransitCardType:"Transit Card Type Valid Ind",aobjOperatorAssignments:"Operator Assignments",iParticipantID:"Participant ID",aobjTicketProfileDef:"Ticket Profile Definition",iTicketTypeCode:"Ticket Type Code",iTktTypeValidityInd:"Ticket Valid Indicator",iConcessionCode:"Concession Code",iTktType2Availability:"Ticket Type 2 Availability",iEnExSequenceCheck:"Entry/Exit Sequence Check Indicator",iExcessTimeInCheck:"Excess Time in System Check Indicator",iLowPurseBalance:"Low Purse Balance",iRailMinEntryVal:"Rail Minimum Travel Value",strTktTypeName:"Ticket Type Name",strTktTypeAbbr:"Ticket Type Abbreviation",strServiceCategoryBitmap:"Service Category Bitmap",aobjPassProfileDef:"Pass Profile Definition",iPassTypeCode:"Pass Type Code",iValidTktType:"Valid Ticket Type Code",iDailyOrCumulativeUsage:"Daily Use Indicator",iOffPeakPassInd:"Off Peak Pass Indicator",iRailUsageLimit:"Rail Usage Limit",iBusUsageLimit:"Bus Usage Limit",strPassTypeName:"Pass Type Name",aobjFareCapDef:"Fare Cap Definition",iCheckFCOptInIndicator:"Check Fare Cap Opt-in",iEnableFCOptInOption:"Enable Fare Cap Opt-in",strFareCapServiceCategoryMap:"Fare Cap to Svce Category Map",aobjTeVWhitelistDetails:"TeV Whitelist",strCAN:"Card ID",iTeVID:"TeV ID",strPayoutAmt:"Payment Amount",strPayoutExpiryDate:"Payout Expiry Date",strPayoutType:"Payout Type",iNoOfEMVBlockListActionMsgs:"Number of EMV Blocklist",aobjEMVBlockListActionMsgs:"EMV",strBlocklistReason:"Blocklist Reason",strBlocklistPatronActionMsg:"Patron Action Message",bitAllowRailExit:"Allow Bus Exit",bitRFU:"RFU",iNoOfCEPASBlockListActionMsgs:"Number of CEPAS Blocklist",aobjCEPASBlockListActionMsgs:"CePAS TOKEN",bitDisableTokenAction:"Disable Token",bitRejectTokenAction:"Reject Token",bitRetainTokenAction:"Retain Token",bitAllowDebtSettlementAction:"Allow Debt Settlement",bitAllowRailExitAction:"Allow Bus Exit",bitAllowTopUpAction:"Allow Top-Up",SN:"Service Number",ACC:"Air Con Service Category",NACC:"Non Air Con Service Category",ACG:"Air Con Service Grade",NACG:"Non Air Con Service Grade",TFI:"Through-Fair Indicator",SSID:"Special Service ID",IF:"Feeder Indicator",NMD1:"Number of Outbound Entries",NMD2:"Number of Inbound Entries",NV:"Number of Variants",ESFC:"Entry Stepdown-Fare Charge",UCS:"Use Checkpoint Stage",UBS:"Use By-pass Stages",MI:"Marker ID",TBP:"Trunk By-pass",ST:"Stop Type",NM:"Type and Distance",DFO:"Distance from Origin",VD:"Variant Descriptor",VID:"ITS Variant ID",VSPID:"Service Provider",VPID:"Package ID"};function bi(n,b){if(n&1&&(x(0),p(1,"async"),p(2,"date"),p(3,"async"),p(4,"date")),n&2){let t,i=c(2).$implicit,e=c();Bt(" ",U(2,4,(t=y(1,2,e.selectedFilters))==null||t[i.controlName]==null?null:t[i.controlName].startDate,"dd/MM/yyyy")," - ",U(4,9,(t=y(3,7,e.selectedFilters))==null||t[i.controlName]==null?null:t[i.controlName].endDate,"dd/MM/yyyy")," ")}}function Ci(n,b){if(n&1&&(x(0),p(1,"async"),p(2,"date")),n&2){let t,i=c(2).$implicit,e=c();z(" ",U(2,3,(t=y(1,1,e.selectedFilters))==null?null:t[i.controlName],"dd/MM/yyyy")," ")}}function Di(n,b){if(n&1&&(x(0),p(1,"async")),n&2){let t,i=c(2).$implicit,e=c();z(" ",(t=y(1,1,e.selectedFilters))==null?null:t[i.controlName]," ")}}function Si(n,b){if(n&1){let t=At();s(0,"mat-chip",2),A("removed",function(){ut(t);let e=c().$implicit,a=c();return ft(a.removeFilter(e.controlName))}),s(1,"span",3),x(2),f(),s(3,"span",4),F(4,bi,5,12),p(5,"async"),Dt(6,Ci,3,6)(7,Di,2,3),f(),s(8,"button",5)(9,"mat-icon"),x(10,"close"),f()()()}if(n&2){let t=c().$implicit,i=c();D(2),z("",i.FILTER_NAMES[t.controlName],":"),D(2),w(y(5,2,i.isDateRangeFilter(t.controlName))?4:t.type==="date-picker"||t.type==="date-field"?6:7)}}function Ii(n,b){if(n&1&&(F(0,Si,11,4,"mat-chip",1),p(1,"async")),n&2){let t=b.$implicit,i=c();w(y(1,1,i.isFilterNotEmpty(t.controlName))?0:-1)}}var ve=(()=>{class n{constructor(t){this.filterService=t,this.FILTER_NAMES=di}ngOnInit(){this.selectedFilters=this.filterService.selectedFilters$,this.filterConfigs=this.filterService.filterConfigs$}ngOnDestroy(){this.filterService.clearSelectedFilters()}isFilterNotEmpty(t){return this.filterService.selectedFilters$.pipe($(i=>{let e=i[t];return t==="effectiveDate"||t==="effectiveDateLive"||t==="effectiveDateTrial"||t==="dateRange"||t==="eventDateTime"?e?.startDate!=null&&e?.endDate!=null:e!==""&&e!=null}))}isDateRangeFilter(t){return this.filterService.selectedFilters$.pipe($(i=>{let e=i[t];return(t==="effectiveDate"||t==="effectiveDateLive"||t==="effectiveDateTrial"||t==="dateRange"||t==="eventDateTime")&&e&&typeof e=="object"&&e.startDate!=null&&e.endDate!=null}))}removeFilter(t){let i=this.filterService.getSelectedFilters(),e=h({},i);e[t]="",this.filterService.removeFilter(t,e),this.filterService.updateFilterValues({[t]:[]})}static{this.\u0275fac=function(i){return new(i||n)(bt(Yt))}}static{this.\u0275cmp=B({type:n,selectors:[["app-selected-filter"]],decls:5,vars:2,consts:[[1,"chip-container"],["removable","","disableRipple","",1,"filter-chip"],["removable","","disableRipple","",1,"filter-chip",3,"removed"],[1,"name"],[1,"value"],["matChipRemove",""]],template:function(i,e){i&1&&(s(0,"div",0)(1,"mat-chip-set"),It(2,Ii,2,3,null,null,St),p(4,"async"),f()()),i&2&&(D(2),Tt(y(4,0,e.filterConfigs)))},dependencies:[jt,Ot,Vt,si,pt,ri,ci,Jt,Zt,Mt,Rt],styles:[".chip-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;padding:10px 8px 10px 20px}.filter-chip[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:8px;background-color:unset!important;border-radius:50px;padding:8px;height:32px;font-size:14px;border:1px solid #4a5964;color:#000}.filter-chip[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .filter-chip[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:14px;line-height:16px}.filter-chip[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin-right:8px;font-weight:400;color:#828282}.filter-chip[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-weight:700}.filter-chip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;padding:0;display:flex;align-items:center}.filter-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer}.mat-mdc-standard-chip[_ngcontent-%COMP%]{--mdc-chip-selected-focus-state-layer-color: : #fff;--mdc-chip-selected-hover-state-layer-color: #fff;--mdc-chip-hover-state-layer-color: #fff;--mdc-chip-focus-state-layer-color: #fff;--mat-chip-trailing-action-opacity: none}  .mat-mdc-chip-action{padding-left:unset!important}"]})}}return n})();var Ce=(()=>{class n{constructor(t,i,e){this.http=t,this.message=i,this.dynamic=e,this.uriSettings=v.gateway+"",this.uri=v.gateway+"svc-provider/",this.uriGeneralInfo=v.gateway+"general-information",this.operatorList=new _([]),this.operatorList$=this.operatorList.asObservable(),this.uriSettings=this.dynamic.setDynamicEndpoint("",this.uriSettings),this.uri=this.dynamic.setDynamicEndpoint("common",this.uri),this.uriGeneralInfo=this.dynamic.setDynamicEndpoint("",this.uriGeneralInfo)}validateBusNumber(t){let i=t.target,e=i.value,a=t.key;if(["Backspace","Tab","ArrowLeft","ArrowRight","Delete"].includes(a))return!0;if(!/^[a-zA-Z0-9]$/.test(a))return t.preventDefault(),!1;let o=i.selectionStart||0,k=i.selectionEnd||0,R=e.substring(0,o)+a+e.substring(k);return R.length>8||!/^[a-zA-Z]{0,3}[0-9]{0,4}[a-zA-Z]?$/.test(R)?(t.preventDefault(),!1):!0}updateOperatorList(t){this.operatorList.next(t)}search(t){return this.http.post(`${this.uri}search`,t).pipe(m(i=>this.message.multiError(i)))}getDepotIds(t){return t.map(i=>i.depot_id)}getSettingDefault(){return this.http.get(`${this.uriSettings}settings/default`)}getGeneralInformation(t){let i=`${v.gateway}general-information`;if(!v.useDummyData){let e={status:200,status_code:"SUCCESS",timestamp:Date.now(),message:"Dummy data fetched successfully",payload:{general_information:{version:"MDCS.A.01.01.00.000AFHACNS",service_provider:"SBST",system_connection:[{name:"BOCC",status:1},{name:"PMDS",status:1},{name:"ABCDE",status:0},{name:"FGHIJ",status:1},{name:"KLMNO",status:0}],pdt_status:0}}};return N(e)}return this.http.get(i).pipe(m(e=>this.message.multiError(e)))}static{this.\u0275fac=function(i){return new(i||n)(u(q),u(K),u(Q))}}static{this.\u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var li=class{constructor(){this.id=[0,g.required],this.bus_num=["",[g.required,g.minLength(5),g.maxLength(8),g.pattern(/^[a-zA-Z]{2,3}[0-9]{4}[a-zA-Z]?$/)]],this.effective_date=["",g.required],this.effective_time=["",g.required],this.depot_id=["",g.required],this.hidden=!1}},M=(function(n){return n["Future Dated"]="future_dated",n.Inactive="inactive",n.Active="active",n.Obsolete="obsolete",n})(M||{}),Ie={[M["Future Dated"]]:"Future Dated",[M.Active]:"Active",[M.Inactive]:"Inactive",[M.Obsolete]:"Obsolete"};var Ee=(()=>{class n{constructor(t,i,e,a){this.http=t,this.dialog=i,this.message=e,this.dynamic=a,this.uri=v.gateway+"master-bus-list/",this.uri=this.dynamic.setDynamicEndpoint("bus",this.uri)}search(t){return this.http.post(`${this.uri}search`,t).pipe(m(i=>this.message.multiError(i)))}searchOld(t){if(v?.useDummyData){let i={status:200,status_code:"SUCCESS",timestamp:Date.now(),message:"Dummy data fetched successfully",payload:O(h({},st),{master_bus_list:st?.master_bus_list})};return N(i)}return this.http.post(`${this.uri}search`,t).pipe(m(i=>this.message.multiError(i)))}add(t){return this.http.post(`${this.uri}save`,t).pipe(m(i=>this.message.multiError(i)))}delete(t){return this.http.delete(`${this.uri}delete`,{body:t}).pipe(m(i=>this.message.multiError(i)))}find(t){return this.http.post(`${this.uri}find-info  `,t).pipe(m(i=>this.message.multiError(i)))}static{this.\u0275fac=function(i){return new(i||n)(u(q),u(Xt),u(K),u(Q))}}static{this.\u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();export{Ce as a,di as b,Yt as c,ve as d,li as e,M as f,Ie as g,Ee as h};
